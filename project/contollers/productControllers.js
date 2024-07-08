const ProductModel = require('../models/product');

exports.createProduct = async (req, res) => {
    await ProductModel.create({
     product_name: req.body.product_name,
     product_price: req.body.product_price,
     isInStock: req.body.isInStock,
     category: req.body.category,
   });
 
   return res.status(201).json({ message: "Product Created" });
 }

 exports.getAllProduct = async(req , res)=>{
    const allProucts = await ProductModel.find({isInStock:true})
 
    return res.json(allProucts)
 }

 exports.getProductById =  async(req , res)=>{
    const product = await ProductModel.findById(req.params.id)
   
    return res.json(product)
   }

   exports.updateProduct =  async(req , res)=>{
    const updatedProduct = await ProductModel.findByIdAndUpdate(req.params.id , req.body)
    return res.json(updatedProduct)
  }

  exports.deleteProduct =  async(req,res)=>{
    const deleted = await ProductModel.findByIdAndDelete(req.params.id);
    return res.json(deleted);
  }