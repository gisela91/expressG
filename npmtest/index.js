const express = require("express");
const fs = require("fs");
const app = express();

//middlewers
app.use(express.json());
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  //console.log("My middleware");
  next();
})
const port = process.env.PORT;
//const products = JSON.parse(fs.readFileSync(`${__dirname}/data/products.json`));
//console.log(products);
//Handlers
const getAllProducts = (req, res) => {
  const products = JSON.parse(
    fs.readFileSync(`${__dirname}/data/products.json`)
    );
  console.log(req.requestTime);
  res.status(200).json({
    status: "success",
    data: {
      products,
    },
  });
}

const addproduct= (req, res) => {
  const products = JSON.parse(
    fs.readFileSync(`${__dirname}/data/products.json`)
    );
  products.push(req.body);
  fs.writeFileSync(`${__dirname}/data/products.json`, JSON.stringify(products));
  //console.log(req.body);
  res.status(200).json({
    status: "success",
    data: {
      products,
    },
  });
}

const getProductById= (req, res) => {
  const products = JSON.parse(
    fs.readFileSync(`${__dirname}/data/products.json`)
    );

  const foundProduct = products.find(p => p.id == req.params.id);
  //console.log(req.params);
  if(foundProduct){
    res.status(200).json({
      status: "success",
      data: {
        products: foundProduct,
      },
    });
  } else{
      res.status(200).json({
        status: "not found",
      });
  }
}

//routes
app.get("/api/v1/products", getAllProducts);
app.post("/api/v1/products", addproduct);
app.get("/api/v1/products/:id", getProductById);

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
