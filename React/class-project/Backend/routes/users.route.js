import express from "express";
// import fs from "fs";
import UserModel from "../models/users.model.js";
import { verifyToken } from "../utils/helper.utils.js"

// You can also do this
// export const router = express.Router();

// Then In index.js You have to do this
// import { router as productRouter } from './routes/products.routes.js';

const router = express.Router();

/* --------------------------- GET REQUEST --------------------------- */
// router.get("/", (req, res) => {
//     const data = fs.readFileSync("db.json");

//     const products = JSON.parse(data)?.products;

//     if (products && products.length > 0)
//     {
//         res.status(200).send(products);
//     }
//     else
//     {   
//         res.status(204).send("No Products Found");
//     }
// })

// router.get("/", (req, res) => 
// {
//     ProductsModel.findAllProducts(

//         // Success Callback
//         (dbres) => 
//         {
//             if (dbres && dbres.length > 0)
//             res.status(200).send({message: "Request Successfull", product: dbres});

//             else
//             res.status(204).send({message: "No Products Found", product: dbres});  
//         }, 

//         // Error Callback
//         (dbres ) =>
//         {
//             res.status(500).send({message : "Product Creation Failed", error: dbres});
//         }
//     );   
// })

// router.get("/:id", (req, res) =>
// {
//     const productId = req.params.id;

//     ProductsModel.findProduct(productId,

//         // Success Callback
//         (dbres) => 
//         {
//             if (dbres && dbres.length > 0)
//             res.status(201).send({message: "Product Created Successfully", product: dbres});

//             else
//             res.status(204).send({message: "No Products Found", product: dbres});
//         }, 

//         // Error Callback
//         (dbres ) =>
//         {
//             res.status(500).send({message : "Product Creation Failed", error: dbres});
//         }
//     );
// });

router.get("/:email", verifyToken, (req, res) => {

    UserModel.getUser(req, 

        // Success Call Back
        (dbRes) =>
        {
            res.status(201).send({message: "Request Success", user: dbRes});
        },

        // Error Call Back
        (dbRes) =>
        {
            res.status(400).send({message: "InValid Request", error: dbRes});
        }
    )
})

/* --------------------------- POST REQUEST --------------------------- */
// router.post("/", (req, res) => {
    
//     const product = req.body;

//     console.log("The Product Object :- ", product);

//     let db = fs.readFileSync("db.json");

//     try 
//     {
//         db = fs.readFileSync("db.json", {encoding: "utf-8"});
//     }
//     catch (error) 
//     {
//         return res.status(500).send({message: "Data Read Error", error: error});
//     }

//     const dbObject = JSON.parse(db);

//     const products = dbObject.products;

//     const newProducts = [...products, product];

//     const updatedDb = {
//         ...dbObject,

//         products: newProducts
//     }

//     try 
//     {       
//         fs.writeFileSync("db.json", JSON.stringify(updatedDb));
//         res.status(201).send({message: "Product Created Successfully", product: product});  
//     } catch (error) 
//     {
//         res.status(500).send({message : "Product Creation Failed", error: error});
//     } 
// })

router.post("/signup", (req, res) => {
    const user = req.body;
    
    UserModel.addUser(user,

        // Success Callback
        (dbres) => 
        {
            res.status(201).send({message: "User Creation Successfully", product: dbres});   
        }, 

        // Error Callback
        (dbres ) =>
        {  
            if (dbres.Error == 'ValidationError') 
            res.status(400).send({message : "Invalid Details from Client", error: dbres});

            else
            res.status(500).send({message : "User Creation Failed", error: dbres});
        }
    );
})

router.post("/signin", (req, res) => {

    const user = req.body;

    UserModel.signIn(user,

        // Success Callback
        (dbres) => 
        {
            console.log("The User Object :- ", dbres);
            res.status(201).send({message: "User Authenticated Successfully", user: dbres});   
        },

        // Error Callback
        (dbres) =>
        {  
            res.status(401).send({message : "User Authentication Failed", error: dbres});
        }
    );
})

/* --------------------------- PUT REQUEST --------------------------- */
// router.put("/", (req, res) => {
    
//     const product = req.body;

//     console.log("The Product Object :- ", product);

//     let db = fs.readFileSync("db.json");

//     try 
//     {
//         db = fs.readFileSync("db.json", {encoding: "utf-8"});
//     }
//     catch (error) 
//     {
//         return res.status(500).send({message: "Data Read Error", error: error});
//     }

//     const dbObject = JSON.parse(db);

//     const products = dbObject.products;

//     const productToBeUpdatedIdx = products.findIndex(p => p.id === product.id);

//     if (productToBeUpdatedIdx === -1)
//     {
//         return res.status(404).send({message: "Product Not Found"});
//     }

//     const newProducts = [...products];

//     newProducts[productToBeUpdatedIdx] = product;

//     const updatedDb = {
//         ...dbObject,

//         products: newProducts
//     }

//     try 
//     {       
//         fs.writeFileSync("db.json", JSON.stringify(updatedDb));
//         res.status(201).send({message: "Product Updated Successfully", product: product});  
//     } catch (error) 
//     {
//         res.status(500).send({message : "Product Updation Failed", error: error});
//     } 
// })

// router.put("/", (req, res) => {
//     const product = req.body;
    
//     ProductsModel.editProduct(product,

//         // Success Callback
//         (dbres) => 
//         {
//             res.status(201).send({message: "Product Updated Successfully", product: dbres});            
//         }, 

//         // Error Callback
//         (dbres ) =>
//         {  
//             if (dbres.Error == 'ValidationError') 
//             res.status(400).send({message : "Invalid Details from Client", error: dbres});

//             else
//             res.status(500).send({message : "Product Updation Failed", error: dbres});
//         }
//     );
// })


/* --------------------------- DELETE REQUEST --------------------------- */
// router.delete("/", (req, res) => {
        
//         const productId = req.body.id;
    
//         console.log("The Product Id :- ", productId);
    
//         let db = fs.readFileSync("db.json");
    
//         try 
//         {
//             db = fs.readFileSync("db.json", {encoding: "utf-8"});
//         }
//         catch (error) 
//         {
//             return res.status(500).send({message: "Data Read Error", error: error});
//         }
    
//         const dbObject = JSON.parse(db);
    
//         const products = dbObject.products;
    
//         const productToBeDeletedIdx = products.findIndex(p => p.id === productId);
    
//         if (productToBeDeletedIdx === -1)
//         {
//             return res.status(404).send({message: "Product Not Found"});
//         }
    
//         const newProducts = products.filter(p => p.id !== productId);
    
//         const updatedDb = {
//             ...dbObject,
    
//             products: newProducts
//         }
    
//         try 
//         {       
//             fs.writeFileSync("db.json", JSON.stringify(updatedDb));
//             res.status(201).send({message: "Product Deleted Successfully", productId: productId});  
//         } catch (error) 
//         {
//             res.status(500).send({message : "Product Deletion Failed", error: error});
//         } 
// });

// router.delete("/", (req, res) => { 
//     const productId = req.body._id;
    
//     ProductsModel.deleteProduct(productId,

//         // Success Callback
//         (dbres) => 
//         {
//             res.status(201).send({message: "Product Deleted Successfully", productId: dbres});  
//         }, 

//         // Error Callback
//         (dbres ) =>
//         {
//             if (dbres.Error == 'ValidationError')
//             res.status(400).send({message : "Invalid Details from Client", error: dbres});

//             else
//             res.status(500).send({message : "Product Deletion Failed", error: dbres});
//         }
//     );
// });

export default router;