const express = require("express");
const fs = require("fs")

const app = express();

app.use("/", express.static("./static"))

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});