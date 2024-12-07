import mysql from "mysql2";

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "s@jneeT#h@r$hit%391",
    database: "expo",
    port: 3306,
});

// Commonly Used ORM for MySQL: Sequelize ( Similar to Mongoose for MongoDB)

connection.connect((err) => {
    if (err) {
        console.log("Error connecting to Db:", err.message);
        return;
    }
    console.log("Connection established");
});

export default connection;