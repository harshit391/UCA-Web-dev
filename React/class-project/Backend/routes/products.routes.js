import express from express;
import fs from fs;

// You can also do this
// export const router = express.Router();

// Then In index.js You have to do this
// import { router as productRouter } from './routes/products.routes.js';

const router = express.Router();

router.get("/", (req, res) => {
    console.log("The Default Response Object :- ", res);

    console.log("The Defeault Status Code from Res Object :- ", res.statusCode);

    const data = fs.readFileSync("/db.json");

    const products = JSON.parse(data)?.products;

    if (products && products.length > 0)
    {
        res.status(200).send(products);
    }
    else
    {   
        res.status(204).send("No Products Found");
    }
})

router.post("/", (req, res) => {
    
    const product = req.body;

    console.log("The Product Object :- ", product);

    let db = fs.readFileSync("/db.json");

    try 
    {
        db = fs.readFileSync("/db.json", {encoding: "utf-8"});
    }
    catch (error) 
    {
        return res.status(500).send({message: "Data Read Error", error: error});
    }

    const dbObject = JSON.parse(db);

    const products = dbObject.products;

    const newProducts = [...products, product];

    const updatedDb = {
        ...dbObject,

        products: newProducts
    }

    try 
    {
        fs.writeFileSync("db.json", JSON.stringify(updatedDb));
        res.status(201).send({message: "Product Created Successfully", product: product});  
    } catch (error) 
    {
        res.status(500).send({message : "Product Creation Failed", error: error});
    } 
})

export default router;