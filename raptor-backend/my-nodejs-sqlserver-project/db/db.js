const sql = require('mysql2');

// Cấu hình kết nối
const dbConfig = {
  user: 'sa',
  password: 'minhnnhe0611',
  server: '103.200.23.160', // Máy chủ SQL Server
  database: 'raptorcy_raptor',
  options: {
    encrypt: true, // Dùng SSL
    enableArithAbort: true,
    trustServerCertificate: true // Bỏ qua xác thực chứng chỉ tự ký
  }
};

// Tạo kết nối
const pool = sql.createPool(dbConfig);

// Sử dụng kết nối pool
const poolPromise = pool.promise();

poolPromise.getConnection()
  .then(connection => {
    console.log('Connected to MySQL');
    connection.release(); // Giải phóng kết nối sau khi sử dụng
    return poolPromise;
  })
  .catch(err => {
    console.log('Database Connection Failed! Bad Config: ', err);
    throw err;
  });

module.exports = {
  sql, poolPromise
};