const mysql = require("mysql");
const config = require("config");
const dataBaseConfig = config.get("dataBaseConfig");

dataBaseConnection = (callbackConnection) => {
  const connection = mysql.createConnection(dataBaseConfig);
  connection.connect((error) => {
    if (error) {
      console.error("error connecting: " + error.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
    callbackConnection(connection);
  });
};
exports.executeQueryToDatabase = (query, params, callbackResults) => {
  dataBaseConnection((connection) => {
    connection.query(query, params, (error, results) => {
      if (error) {
        return error;
      } else {
        callbackResults(results);
      }
      connection.end();
    });
  });
};
