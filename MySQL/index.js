import "./config/db.connection.js";
import connection from "./config/db.connection.js";

/* ============================================ */

/* TO CREATE A NEW DATABASE / SCHEMA */
/* We Can Only Create one Database wit a single Name */

const createDataBase = () => {
    connection.query("CREATE DATABASE expo", (err, success) => {
        if (err) {
            console.log("Error creating database:", err.message);
            return;
        }
        console.log("Database created successfully", success);
    });
};

// createDataBase();

/* ============================================ */

/* TO CREATE A NEW TABLE */
/* We Can Create Multiple Tables with Different Names */

const createTable = () => {
    connection.query(
        "create table products (productName VARCHAR(255), productPrice INT)",
        (err, success) => {
            if (err) {
                console.log("Error creating table:", err.message);
                return;
            }
            console.log("Table created successfully", success);
        }
    );
};

// createTable();

/* ============================================ */

/* TO INSERT DATA INTO A TABLE */

const insertData = () => {
    const data = {
        productName: "Laptop",
        productPrice: 50000,
    };

    connection.query(
        "INSERT INTO products (productName, productPrice) values('Laptop', 10000)",
        (err, success) => {
            if (err) {
                console.log("Error inserting data:", err.message);
                return;
            }
            console.log("Data inserted successfully", success);
        }
    );
};

// insertData();

/* ============================================ */

/* TO DELETE DATA FROM A TABLE */

const deleteData = () => {
    connection.query(
        "DELETE FROM products WHERE productPrice >= 100",
        (err, success) => {
            if (err) {
                console.log("Error deleting data:", err.message);
                return;
            }
            console.log("Data deleted successfully", success);
        }
    );
};

// deleteData();

/* ============================================ */

/* TO UPDATE DATA IN A TABLE */

const updateData = () => {
    connection.query(
        "UPDATE products WHERE productName = 'Laptop' SET productName = 'MyLaptop'",
        (err, success) => {
            if (err) {
                console.log("Error updating data:", err.message);
                return;
            }
            console.log("Data updated successfully", success);
        }
    );
};

// updateData();

/* ============================================ */

/* TO FETCH DATA FROM A TABLE */
/* We Can Fetch Data from a Table using SELECT Query */

const fetchData = () => {
    connection.query(
        "SELECT * FROM products where products.productPrice >= 50",
        (err, data) => {
            if (err) {
                console.log("Error fetching data:", err.message);
                return;
            }
            console.log("Data fetched successfully", data);
        }
    );
};

fetchData();
