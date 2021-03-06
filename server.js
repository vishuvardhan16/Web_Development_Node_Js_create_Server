const express = require("express");
const http = require("http");
const cors = require("cors");
const mongoose = require("mongoose");
require('dotenv').config();

const PORT = process.env.PORT || process.env.API_PORT;

const app = express();
app.use(express.json());
app.use(cors());

console.log(`Starting Our Server`);

const server = http.createServer(app);



mongoose
.connect(process.env.MANGO_URI)
.then(() => {
    server.listen(PORT,() => {
        console.log(`server is listening on ${PORT}`);
    });
})
.catch((err) =>  {
    console.log(`MongoDB databes connection failed`);
    console.error(err);
});
