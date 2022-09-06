const fs = require("fs");
exports.getAllProducts = (req, res) => {
    const products = JSON.parse(
      fs.readFileSync(`${__dirname}/../data/products.json`)
      );
    //console.log(req.requestTime);
    res.status(200).json({
      status: "success",
      timeOfRequest: req.requestTime,
      results: products.length,
      data: {
        products,
      },
    });
  }
  
  exports.addproduct= (req, res) => {
    const products = JSON.parse(
      fs.readFileSync(`${__dirname}/../data/products.json`)
      );
    products.push(req.body);
    fs.writeFileSync(`${__dirname}/../data/products.json`, JSON.stringify(products));
    //console.log(req.body);
    res.status(200).json({
      status: "success",
      data: {
        products,
      },
    });
  }
  
  exports.getProductById= (req, res) => {
    const products = JSON.parse(
      fs.readFileSync(`${__dirname}/../data/products.json`)
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
        res.status(404).json({
          status: "not found",
        });
    }
  }
  
  