import { useState } from "react";

function productList() {
    const [products, setProducts] = useState([]);

    setTimeout(() => {
        setProducts([
            {
                name: "Product 1 Name",
                price: "Rs. 20.00",
            },
            {
                name: "Product 2 Name",
                price: "Rs. 30.00",
            },
            {
                name: "Product 3 Name",
                price: "Rs. 40.00",
            },
            {
                name: "Product 4 Name",
                price: "Rs. 50.00",
            },
        ]);
    }, 1000);

    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <table
                style={{
                    border: "2px solid black",
                    borderCollapse: "collapse",
                }}
            >
                <thead>
                    <th style={{ border: "2px solid black", padding: "1rem" }}>
                        Product Name
                    </th>
                    <th style={{ border: "2px solid black", padding: "1rem" }}>
                        Product Price
                    </th>
                </thead>

                <tbody>
                    {products.map((product, index) => {
                        return (
                            <tr key={index}>
                                <td
                                    style={{
                                        border: "2px solid black",
                                        padding: "1rem",
                                    }}
                                >
                                    {product.name}
                                </td>
                                <td
                                    style={{
                                        border: "2px solid black",
                                        padding: "1rem",
                                    }}
                                >
                                    {product.price}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default productList;

/*
function productList()
{
    var products = [];

    setTimeout(() => {
        products = 
        [
            {
                "name" : "Product 1 Name",
                "price" : "Rs. 20.00"
            },
            {
                "name" : "Product 2 Name",
                "price" : "Rs. 30.00"
            },
            {
                "name" : "Product 3 Name",
                "price" : "Rs. 40.00"
            },
            {
                "name" : "Product 4 Name",
                "price" : "Rs. 50.00"
            }
        ];
    }, 1000);
    

    return (
        <div style={{display: "flex", justifyContent: "center"}}>
            <table style={{border: "2px solid black", borderCollapse: "collapse"}}>
                <thead>
                    <th style={{border: "2px solid black", padding: "1rem"}}>Product Name</th>
                    <th style={{border: "2px solid black", padding: "1rem"}}>Product Price</th>
                </thead>
                
                <tbody>
                {products.map((product, index) => 
                {
                    return  (
                        <tr key={index}>
                                <td style={{border: "2px solid black", padding: "1rem"}}>{product.name}</td>
                                <td style={{border: "2px solid black", padding: "1rem"}}>{product.price}</td>
                        </tr>
                    );
                })}
                </tbody>
                
            </table>
        </div>
    );
}

export default productList;
*/
