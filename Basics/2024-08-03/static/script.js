// function init() {
//     document.getElementById("jsworld").innerHTML = "Hello World from JavaScript!";
// }


function renderProducts() {
    var productsListFromServer;

    function fetchProductList() {
        console.log("Fetching product list from server")
        productsListFromServer = productsList;
        initProductItem();
    }

    function initProductItem() {
        console.log("Initializing product items HTML Table");
        if (!productsListFromServer || productsListFromServer?.length === 0) {
            document.getElementById("productMenu").innerHTML = `${getLoader()}`;
            return;
        }

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

    // var random_arr = [1, 2];

    // function getProductList() {

    //     var rows = "";
    //     for (let i = 0; i < productsList.length; i++ ) {

    //         rows = rows + `
    //         <tr>
    //         <td>${i+1}</td>
    //         <td>${productsList[i].name}</td>
    //         <td>${productsList[i].description}</td>
    //         <td>${productsList[i].price}</td>
    //         </tr>`
    //     }
    //     return rows;
    // }

    function getLoader() {
        return `<h1>Loading Data</h1>`
    }

    function getProductListUsingMap() {

        var rowsOfProdcuts = productsListFromServer.map((item, index) => {
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


    // function gets into the stack and then executed any variables that are returend from the function are stored in Heap.
    // we do apis asycn and event listeners and all.
    // event queue or callback queue handles all the event listeners or async functions.
    // this is the event loop.
    // JS is only single threaded!!
    // All the APIs and Callback queue are handled by the browser.
    // init();

    initProductItem();
    setTimeout(fetchProductList, 1000)

    // what is event loop?
    // and why is javascript singlethreaded and then how do async operations happen.
// fetchProductList();
}

renderProducts();