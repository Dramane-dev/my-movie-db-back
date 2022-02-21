const express = require("express");
const dotenv = require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`Server start on port ${port} successfully...`);
});