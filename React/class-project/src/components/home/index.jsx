import { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import Button from "../elements/button";

function ProductList() {
    const navigate = useNavigate();

    // const navigateToEdit = () => {
    //     console.log('Navigating to edit');
    // }
    // setTimeout(() => {
    //     var products = [{name: 'Product 4', price: 400}, {name: 'Product 5', price: 500}, {name: 'Product 6', price: 600}];
    // }, 2000);

    // the problem is that the products are not getting updated in the UI
    // this is because the products are not getting updated in the state
    // we need to use the state to update the products
    // never use open variables to store the data

    var [products, setProducts] = useState([]);

    const [productToDelete, setProductToDelete] = useState(null);

    const [count, setCount] = useState(0);

    // --------------------------------------------------

    // --------------------------------------------------

    // useEffect -> used to perform side effects in the component
    // side effects are the actions that are performed in the component
    // [] -> used to run the useEffect only once when the component is rendered (dependency array) (componentDidMount)
    // if we remove the [] then the useEffect will run on every render
    // [productList] -> used to run the useEffect only when the productList is updated (componentDidUpdate)

    // a function can return multiple elements through, array, objects, callbacks, etc

    // setTimeout(() => {
    //     setProducts([{name: 'Product 1', price: 400}, {name: 'Product 2', price: 500}, {name: 'Product 3', price: 600}]);
    // }, 1000);

    useEffect(() => {
        fetch("http://localhost:3000/products")
            .then((response) => response.json())
            .then((data) => setProducts(data.product));
    }, []);

    useEffect(() => {
        console.log("Products updated", products);
    }, [products]);

    // 2 hooks useState and useRef are used to update the state and to refer to the DOM elements
    // useState is used to update the state of the component
    // useRef is used to refer to the DOM elements

    // New function to handle editing a product
    const handleEdit = (product) => {
        fetch(`http://localhost:3000/products`, {
            method: "PUT",
            body: JSON.stringify(product),
            headers: {
                "Content-Type": "application/json",
            },
        }).then(() => {
            setProducts(
                products.map((p) => {
                    if (p._id === product._id) {
                        return product;
                    }
                    return p;
                })
            );
        });

        sessionStorage.setItem("editingProduct", JSON.stringify(product));
        sessionStorage.setItem("isEditing", "true");
        navigate("/manageProduct");
    };

    // New function to handle deleting a product
    const handleDelete = (product) => {
        if (!window.confirm("Are you sure you want to delete this product?")) {
            return;
        }

        console.log("Deleting product", product);

        setProductToDelete(product);

        fetch(`http://localhost:3000/products`, {
            method: "DELETE",
            body: JSON.stringify(product),
            headers: {
                "Content-Type": "application/json",
            },
        }).then(() => {
            setProducts(products.filter((p) => p._id !== product._id));
        });
    };

    return (
        <>
            <div id="cont">
                {productToDelete && (
                    <div className="d-flex justify-content-between">
                        <div className="alert alert-danger">
                            {productToDelete.productName} is deleted
                            successfully
                        </div>
                        <div
                            onClick={(e) => {
                                setProductToDelete(null);
                            }}
                            role="button"
                            className="alert alert-dark cursor-pointer"
                        >
                            Close <span>&times;</span>
                        </div>
                    </div>
                )}
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Edit Item</th>
                            <th>Delete Item</th>
                        </tr>
                    </thead>

                    <tbody>
                        {products.map((product) => {
                            return (
                                <tr key={product._id}>
                                    <td>{product.productName}</td>
                                    <td>{product.productPrice}</td>
                                    <td>
                                        <button
                                            className="btn btn-primary"
                                            onClick={() => handleEdit(product)}
                                        >
                                            Edit
                                        </button>
                                    </td>
                                    <td>
                                        <button
                                            className="btn btn-danger"
                                            onClick={() =>
                                                handleDelete(product)
                                            }
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            <Link to="/manageProduct">
                <Button
                    onClick={() => {
                        sessionStorage.removeItem("editingProduct");
                        sessionStorage.setItem("isEditing", "false");
                    }}
                >
                    Add New Product
                </Button>
            </Link>
        </>
    );
}

export default ProductList;

// Table explanation
// tr - table row
// th - table header
// td - table data
// thead - table header
// tbody - table body
// key - unique identifier for each element in the list
// map - used to iterate over the list
// index - index of the element in the list
// style - inline styling
