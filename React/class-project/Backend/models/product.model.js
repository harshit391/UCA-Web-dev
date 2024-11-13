import mongoose from "mongoose";

/* ----------------------------------------------------------------------------------------------------------- */
/* Defining The Schema */
const productsSchema = new mongoose.Schema(
{
    productName: {
        type: String,
        required: true
    },
    productPrice: {
        type: Number,
        required: true
    }
});

/* Creating The Model of Schema
    It Creates a reference to Call That Scheme as a Function to create a Collection */
const ProductsModel = mongoose.model("product", productsSchema);

/* ----------------------------------------------------------------------------------------------------------- */
ProductsModel.findAllProducts = async (sucessCallBack, errorCallback) => 
{
    try
    {
        const dbRes = await ProductsModel.find({});
        console.log("Get | dbres is: ", dbRes);
        sucessCallBack(dbRes);
    }
    catch (error)
    {
        console.error("Get | dbErr is: ", error);
        errorCallback(error);
    }
};

ProductsModel.findProduct = async (productId, sucessCallBack, errorCallback) =>
{
    try
    {
        const dbRes = await ProductsModel.findById(productId);
        console.log("Get | dbres is: ", dbRes);
        sucessCallBack(dbRes);
    }
    catch (error)
    {
        console.error("Get | dbErr is: ", error);
        errorCallback(error);
    }
}

/* ----------------------------------------------------------------------------------------------------------- */
/* CRUD Operations */

// 1. Create a new product
ProductsModel.addProduct = async (product, sucessCallBack, errorCallback) => 
{
    try 
    {
        const dbRes = await ProductsModel.insertMany([product]);
        console.log("Post | dbres is: ", dbRes);
        sucessCallBack(dbRes);
    } 
    catch (error) 
    {
        console.error("Post | dbErr is: ", error);
        errorCallback(error);
    }
};

// 2. Update an existing product
ProductsModel.editProduct = async (product, sucessCallBack, errorCallback) => 
{
    try 
    {
        const dbRes = await ProductsModel.findByIdAndUpdate(product._id, product, {new: true});
        console.log("Put | dbres is: ", dbRes);
        sucessCallBack(dbRes);
    } 
    catch (error) 
    {
        console.error("Put | dbErr is: ", error);
        errorCallback(error);
    }
};

// 3. Delete an existing product
ProductsModel.deleteProduct = async (productId, sucessCallBack, errorCallback) =>
{
    try 
    {
        const dbRes = await ProductsModel.findByIdAndDelete(productId);
        console.log("Delete | dbres is: ", dbRes);
        sucessCallBack(dbRes);
    } 
    catch (error) 
    {
        console.error("Delete | dbErr is: ", error);
        errorCallback(error);
    }
}

export default ProductsModel;

