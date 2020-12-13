const productCtrl={};
const Product = require('../models/product');
const Process = require('../models/process');

productCtrl.getProducts = async(req, res,next) => {
    const products =await Product.find();
    res.json(products);
}
productCtrl.getProduct = async(req, res,next) => {
    const product =await Product.findById(req.params.id);
    res.json(product);
}
productCtrl.createProduct =  async(req, res,next) => {

    const product=new Product({
        name: req.body.name,
        gdate: req.body.gdate,
        image:req.body.image
      });
    await product.save();
    res.json({
        'status':'Product Saved'
    });
}
productCtrl.deleteProduct = async(req, res) => {
  /*   db.products.remove({_id: mongojs.ObjectId(req.params.id)}, (err, product) => {
        if(err){ res.send(err); }
        res.json(product);
    }); */
    await Product.findOneAndRemove(req.params.id);
    res.json({status:'Product Deleted'});
}

productCtrl.updateProduct= async(req, res) => {
    const {id} =req.params;
    const product = {
        name:req.body.name,
        gdate: req.body.gdate,
        image:req.body.image
    };
    await Product.findByIdAndUpdate(id, {$set: product}, {new:true});
    res.json({status:"Product Updated"});
}

productCtrl.getProductProcesses = async(req,res,next)=>{
    const{id} = req.params;
    const product = await Product.findById(id).populate('processes');
    res.status(200).json(product.processes);

}
productCtrl.createProductProcesses = async(req,res,next)=>{
    const {id}= req.params;
    //Create a new process
    const newProcess = new Process(req.body);
    //Get product
    const product = await Product.findById(id);
    //Assign product as the process' product
    newProcess.product=product;
    //Save the proccess
    await newProcess.save();
    //Add process to the product's array processes
    product.processes.push(newProcess);
    //Save the product
    await product.save();
    res.status(201).json(newProcess);
}
module.exports = productCtrl;