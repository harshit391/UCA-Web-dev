const express = require("express");
const fs = require("fs")

const app = express();

app.use("/", express.static("./static"))

app.listen(8000, () => {
    console.log("Server is running on port 3000");
});