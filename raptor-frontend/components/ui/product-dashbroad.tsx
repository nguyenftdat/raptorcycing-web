"use client";
import {
  SetStateAction,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import DataTable from "react-data-table-component";
import { localVariable } from "../../app/constants/constants-variable";
import differenceBy from "lodash.differenceby";

const columns = [
  {
    name: "ID",
    selector: (row: { product_id: any }) => row.product_id,
    sortable: true,
    width: "75px",
  },
  {
    name: "Name",
    selector: (row: { product_name: any }) => row.product_name,
    sortable: true,
  },
  {
    name: "Drivetrain",
    selector: (row: { drivetrain: any }) => row.drivetrain,
  },
  {
    name: "Weight",
    selector: (row: { weight_kg: any }) => row.weight_kg,
  },
  {
    name: "Price",
    selector: (row: { price: any }) => row.price,
    sortable: true,
  },
  {
    name: "Action",
    cell: (row: any) => (
      <div>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          style={{ ...styles.button }}
        >
          Edit
        </button>
      </div>
    ),
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
  },
];
interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  style?: React.CSSProperties;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, style, icon, children }) => {
  return (
    <button onClick={onClick} style={style} className="btn">
      {icon && <span className="icon">{icon}</span>}
      {children}
    </button>
  );
};

const styles = {
  buttonContainer: {
    display: "flex",
    flexDirection: "row", // Ensure buttons are on the same line
    gap: "8px", // Space between buttons
  },
  button: {
    whiteSpace: "nowrap", // Prevent text from wrapping
    padding: "8px 16px", // Padding inside the button
    borderRadius: "4px", // Rounded corners
    cursor: "pointer", // Pointer cursor on hover
  },
};

const ProductDashbroad = () => {
  const [data, setData] = useState<any>([]);
  const [selectedRows, setSelectedRows] = useState([]);
  const [toggleCleared, setToggleCleared] = useState(false);

  const handleRowSelected = useCallback(
    (state: { selectedRows: SetStateAction<never[]> }) => {
      setSelectedRows(state.selectedRows);
    },
    []
  );

  const contextActions = useMemo(() => {
    const handleDelete = async () => {
      if (
        window.confirm(
          `Are you sure you want to delete:\r ${selectedRows.map(
            (r: any) => r.product_name
          )}?`
        )
      ) {
        // setToggleCleared(!toggleCleared);
        // setData(differenceBy(data, selectedRows, "product_id"));
        const productIdsString = selectedRows
          .map((r: any) => r.product_id)
          .join(",");
        await fetch(
          localVariable.API_BASE_URL + "/products/delete",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              productIdsString: productIdsString,
            }),
          }
        ).then((data) => {
          setData(data);
        });
      }
    };

    return (
      <Button
        key="delete"
        onClick={handleDelete}
        style={{
          backgroundColor: "red",
          border: "none",
          color: "white",
          padding: "7px 26px",
          textAlign: "center",
          textDecoration: "none",
          display: "inline-block",
          fontSize: "16px",
          borderRadius: "3px",
        }}
        icon
      >
        Delete
      </Button>
    );
  }, [data, selectedRows, toggleCleared]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          localVariable.API_BASE_URL + "/products/getAll"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setData(data);
      } catch (error) {}
    };
    fetchData();
  }, []);

  return (
    <div className="p-10">
      <div className="border border-black p-10 rounded my-4">
        <DataTable
          title="User Data"
          columns={columns}
          data={data}
          pagination
          selectableRows
          highlightOnHover
          contextActions={contextActions}
          onSelectedRowsChange={handleRowSelected}
          clearSelectedRows={toggleCleared}
        />
      </div>
    </div>
  );
};

export default ProductDashbroad;
