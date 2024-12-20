import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ManageProduct() {
    const [isEditing, setIsEditing] = useState(false);
    const [productData, setProductData] = useState(null);
    const [isFormCreated, setIsFormCreated] = useState(false);
    const [isFormFailed, setIsFormFailed] = useState(false);
    const navigate = useNavigate();
    const formRefs = {
        productName: useRef(),
        productPrice: useRef(),
    };

    useEffect(() => {
        const storedIsEditing = sessionStorage.getItem("isEditing");

        setIsEditing(storedIsEditing === "true");

        if (storedIsEditing === "true") {
            const storedProduct = JSON.parse(
                sessionStorage.getItem("editingProduct")
            );

            console.log("Product Stoed hered", storedProduct);

            setProductData(storedProduct);

            console.log("Product Stoed hered", formRefs);

            if (storedProduct) {
                formRefs.productName.current.value = storedProduct.productName;
                formRefs.productPrice.current.value =
                    storedProduct.productPrice;
            }
        }
    }, []);

    console.log(productData);
    console.log(isEditing);

    useEffect(() => {
        if (isEditing && productData) {
            console.log("Product Data", productData);
            formRefs.productName.current.value = productData.productName;
            formRefs.productPrice.current.value = productData.productPrice;
        }
    }, [isEditing, productData]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = {
            _id: productData ? productData._id : null,
            productName: formRefs.productName.current.value,
            productPrice: formRefs.productPrice.current.value,
        };

        console.log(formData);

        if (formData.productName === "" || formData.productPrice === "") {
            alert("Please fill all the fields");
            return;
        }

        const method = isEditing ? "PUT" : "POST";

        fetch("http://localhost:3000/products", {
            method: method,
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json",
            },
        }).then((response) => {
            if (response.status === 201 || response.status === 200) {
                setIsFormCreated(true);
                sessionStorage.removeItem("editingProduct");
                sessionStorage.removeItem("isEditing");
                setTimeout(() => navigate("/"), 1500);
            } else {
                setIsFormFailed(true);
            }
        });
    };

    return (
        <>
            {isFormCreated && (
                <div className="alert alert-success" role="alert">
                    Product {isEditing ? "Updated" : "Added"} Successfully
                </div>
            )}
            {isFormFailed && (
                <div className="alert alert-danger" role="alert">
                    Product {isEditing ? "Update" : "Addition"} Failed
                </div>
            )}

            <div className="container mt-5">
                <h2>{isEditing ? "Edit Product" : "Add New Product"}</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3 row">
                        <label
                            htmlFor="inputProductName"
                            className="col-sm-2 col-form-label"
                        >
                            Product Name
                        </label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control"
                                id="inputProductName"
                                ref={formRefs.productName}
                            />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label
                            htmlFor="inputProductPrice"
                            className="col-sm-2 col-form-label"
                        >
                            Product Price
                        </label>
                        <div className="col-sm-10">
                            <input
                                type="number"
                                className="form-control"
                                id="inputProductPrice"
                                ref={formRefs.productPrice}
                            />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <div className="col-sm-10 offset-sm-2">
                            <button type="submit" className="btn btn-primary">
                                {isEditing ? "Update Product" : "Add Product"}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default ManageProduct;
