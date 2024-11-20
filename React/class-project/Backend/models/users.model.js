import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { JWT_SECRET_KEY } from "../config/db.constants.js";

/* ----------------------------------------------------------------------------------------------------------- */
/* Defining The Schema */
const UserSchema = new mongoose.Schema(
{
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

/* Creating The Model of Schema
    It Creates a reference to Call That Scheme as a Function to create a Collection */
const UserModel = mongoose.model("user", UserSchema);

/* GET User */
UserModel.getUser = async (req, sucessCallBack, errorCallback) =>
{
    const emailFromReq = req?.params?.email;
    const emailFromAuthToken = req?.emailFromAuthToken;

    console.log("Email From Request :- ", emailFromReq);
    console.log("Email From Auth Token :- ", emailFromAuthToken);

    if (emailFromAuthToken !== emailFromReq)
    {
        errorCallback("Invalid Credentials");
    }

    try
    {
        const user = await UserModel.find({email: emailFromReq})

        if (user)
        {
            sucessCallBack(user);
        }
        else
        {
            errorCallback("User Not Found");
        }
    }
    catch (error)
    {
        
        errorCallback(error);
    }
}

/* ----------------------------------------------------------------------------------------------------------- */
/* CRUD Operations */

// 1. Create a new User
UserModel.addUser = async (user, sucessCallBack, errorCallback) => 
{
    let encryptedPassword = null;
    if (user?.password) 
    {
        try
        {
            encryptedPassword = bcrypt.hashSync(user.password, 10);
        }
        catch (error)
        {
            console.error("Error in encrypting password: ", error);
            errorCallback(error);
        }
    }

    try 
    {
        const dbRes = await UserModel.insertMany([{...user, password: encryptedPassword}]);
        console.log("Post | dbres is: ", dbRes);
        sucessCallBack(dbRes);
    } 
    catch (error) 
    {
        console.error("Post | dbErr is: ", error);
        errorCallback(error);
    }
};

// 2. Sign In an existing User
UserModel.signIn = async (user, sucessCallBack, errorCallback) => 
{
    try 
    {
        // Finding the User in the Database
        const dbRes = await UserModel.findOne({email: user.email});

        console.log("Post | SingIn dbres is: ", dbRes);

        console.log("User Recieved At Sign In :- ", user);

        // If User Exists
        if (dbRes)
        {
            // Comparing the Password
            const isPasswordMatch = bcrypt.compareSync(user.password, dbRes.password);

            console.log(isPasswordMatch);

            if (isPasswordMatch)
            {
                // Creating a JWT Token if Password Matches
                const authToken = jwt.sign({email: dbRes.email}, JWT_SECRET_KEY, {expiresIn: "1h"});

                console.log("Post | authToken is: ", authToken);

                sucessCallBack(authToken);
            }
            else
            {
                errorCallback("Invalid Password");
            }
        }
        else
        {
            errorCallback("User Do Not Exist");
        } 
    }
    catch (error)
    {
        console.error("Post | dbErr is: ", error);
        errorCallback(error);
    }
};

export default UserModel;

