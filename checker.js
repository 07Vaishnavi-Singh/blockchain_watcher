const ethers = require("ethers");
const { Network, Alchemy } = require("alchemy-sdk");
const { main } = require("./index.js");
const mysql = require("mysql2");

const settings = {
    apiKey: "IL1vdeNVYypZ2yz7Xgqhbh8bydBjgzOR", 
    network: Network.ETH_SEPOLIA, 
  };

const addresses = main();

const alchemy = new Alchemy(settings);

const provider = new AlchemyProvider(
    "ETH_SEPOLIA",
    "IL1vdeNVYypZ2yz7Xgqhbh8bydBjgzOR"
  );

  const insertTransactionFunction = (transaction) => {
    const connection = mysql.createConnection({
      host: "localhost",
      user: "username",
      password: "password",
      database: "database",
    });

    connection.connect();

    const sql =
      "insert into transactions (BlockNum,Transaction_Hash,FromAddress,ToAddress,Amount) VALUES (?, ?, ?, ?, ?)";
    const params = [parseInt(transaction.blockNum,16),transaction.hash,transaction.from, transaction.to, transaction.value];
  
    connection.query(sql, params, function (error, results, fields) {
      if (error) {
        console.error(error);
      } else {
        console.log(`Transaction inserted: ${transaction.hash}`);
      }
      connection.end();
    });
  };