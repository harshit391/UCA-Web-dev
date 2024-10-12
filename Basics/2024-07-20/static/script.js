function init() {
    document.getElementById("jsworld").innerHTML = "Hello World from JavaScript!";
}

function initProductItem() {
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
                <tr>
                    <td>1</td>
                    <td>Product 1</td>
                    <td>Product 1 Description</td>
                    <td>100</td>
                </tr>
            </tbody>
        </table>
    `;
}

init();
initProductItem();