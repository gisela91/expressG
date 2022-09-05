const express = require("express");
const fs = require("fs");
const app = express();
const port = process.env.PORT;
//const products = JSON.parse(fs.readFileSync(`${__dirname}/data/products.json`));

//console.log(products);
app.get("/api/v1/products", (req, res) => {
  const products = JSON.parse(
    fs.readFileSync(`${__dirname}/data/products.json`)
    );

  res.status(200).json({
    status: "success",
    data: {
      products,
    },
  });
});
app.listen(port, () =>{
    console.log(`App running on port ${port}`);
});
/*
const http = require("http");
const url = require("url");
const axios = require("axios");
//const express = require("express");
//const extraFunction = require("./modules/ExtraFunction.js");

const server = http.createServer((req, res) => {
  const { query, pathname } = url.parse(req.url, true);
  const response = {
    success: true,
    message: "API Working",
  };

  res.writeHead(200, {
    "Content-type": "application/json",
  });
  //extraFunction();
  //console.log('test',query, pathname);
  res.end(JSON.stringify(response));
  
});

server.listen(3031, "127.0.0.1", () => {
  console.log("Listening to requests on port 3030"+ process.env.URL);
  //extraFunction();
});

console.log("after server");

//POSTMAN ======> SERVER (NODE)
*/
