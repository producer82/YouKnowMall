const express = require("express");
const app = express();
const fs = require("fs");

app.listen(8888, () => {
    console.log("Server listening on port 8888");
})