const sql = require("mssql");
const { sqlConfig } = require("./database/sql");

const getAllUser = async () => {
  try {
    let pool = await sql.connect(sqlConfig);
    let result = await pool.query`select * from dbo.USERS`;
    console.log("modo largo");
    console.log(result);
  } catch (err) {
    console.log(err);
    console.log("err");
  }
};

const conection = async () => {
  try {
    // make sure that any items are correctly URL encoded in the connection string
    await sql.connect(
      "Server=PC-ALANNY,1433;Database=Web3;User Id=alanny;Password=root;Encrypt=false"
    );
    const result = await sql.query`select * from dbo.USERS`;
    console.log("modo corto");
    console.log(result);
  } catch (err) {
    console.log("err");
    // ... error checks
  }
};

conection();
getAllUser();
