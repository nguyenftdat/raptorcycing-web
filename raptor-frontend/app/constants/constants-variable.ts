export interface FiltersLabel {
  name: string;
  value: string;
}

export interface product {
  product_id: number;
  product_name: string;
  drivetrain: string;
  categories: string;
  color: string;
  price: string;
  size: string;
}

export interface cartItem extends product {
  quantity: number;
}

export const localVariable = {
  API_BASE_URL: "https://raptorcycling.site",
  // API_BASE_URL: "http://localhost",
  sortFiltersLabel: [
    { name: "Default", value: "" },
    { name: "Popular", value: "1" },
    { name: "Price: Low to High", value: "2" },
    { name: "Price: High to Low", value: "3" },
    { name: "Names: A to Z", value: "4" },
    { name: "Names: Z to A", value: "5" },
  ] as FiltersLabel[],
  cateFiltersLabel: [
    { name: "All", value: "" },
    { name: "ROAD RANGE", value: "6" },
    { name: "TRIATHLON RANGE", value: "11" },
    { name: "MTB RANGE", value: "14" }
  ] as FiltersLabel[],
  colorFiltersLabel: [
    { name: "Red", value: "3" },
    { name: "Blue", value: "5" },
    { name: "White", value: "4" },
    { name: "Black", value: "2" },
    { name: "Pink", value: "6" },
    { name: "Metal", value: "1" }
  ] as FiltersLabel[],
};
