import express from 'express';
import productRouter from './routes/products.routes.js';
import dotenv from 'dotenv';
import { connectDB } from './config/db.connection.js';

const app = express();

dotenv.config();

app.use(express.json());

// Connecting to MongoDB
connectDB();

// Setting up CORS Headers for the API to be accessed from any domain or port
app.use("*", (req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
})  

app.use("/products", productRouter);

app.get('/', (req, res) => {
    res.send({ message: 'Hello World' });
});

app.listen(3000, () => {
    console.log('Server is running on port http://localhost:3000');
});