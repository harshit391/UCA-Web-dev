// function init() {
//     document.getElementById("jsworld").innerHTML = "Hello World from JavaScript!";
// }


var productsList = []

function fetchProductList() {
    console.log("Fetching product list from server")
    productsList = [
        {name: "Product 1", description: "Some additional details about P1", price: 100},
        {name: "Product 2", description: "Some additional details about P2", price: 200}
    ]
    initProductItem();
}

function initProductItem() {
    console.log("Initializing product items HTML Table")
    document.getElementById("productMenu").innerHTML = `
    <h3>List of Products</h3>
    <table>
            <thead>
                <tr>
                    <th>Serial No.</th>
                    <th>Product Name</th>
                    <th>Description</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                ${getProductListUsingMap()}
            </tbody>
        </table>
    `;
}

var random_arr = [1, 2];

function getProductList() {

    var rows = "";
    for (let i = 0; i < productsList.length; i++ ) {

        rows = rows + `
        <tr>
        <td>${i+1}</td>
        <td>${productsList[i].name}</td>
        <td>${productsList[i].description}</td>
        <td>${productsList[i].price}</td>
        </tr>`
    }
    return rows;
}

function getProductListUsingMap() {

    var rowsOfProdcuts = productsList.map((item, index) => {
        return `
        <tr>
        <td>${index+1}</td>
        <td>${item.name}</td>
        <td>${item.description}</td>
        <td>${item.price}</td>
        </tr>`
    })

    return rowsOfProdcuts.join("");
}

// init();

initProductItem();
setTimeout(fetchProductList, 1000)
// fetchProductList();
