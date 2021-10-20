const mysql = require('mysql');
const config = require('config');

const dataBaseConfig = config.get('dataBaseConfig');

const dataBaseConnection = (callbackConnection) => {
  const connection = mysql.createConnection(dataBaseConfig);
  connection.connect((error) => {
    if (error) {
      return;
    }
    callbackConnection(connection);
  });
};
exports.executeQueryToDatabase = (query, params, callbackResults) => {
  dataBaseConnection((connection) => {
    connection.query(query, params, (error, results) => {
      if (error) {
        return error;
      }
      callbackResults(results);
      connection.end();
    });
  });
};
