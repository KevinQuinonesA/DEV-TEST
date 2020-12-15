const processCtrl={};
const Process = require('../models/process')

processCtrl.getProcesses = async(req, res,next) => {
    const processes =await Process.find();
    res.json(processes);
}
processCtrl.getProcess = async(req, res,next) => {
    const process =await Process.findById(req.params.id);
    res.json(process);
}
processCtrl.createProcess =  async(req, res,next) => {
    const process=new Process({
        product: req.body.product,
        state: req.body.state
      });
    await process.save();
    res.json({
        'status':'Process Saved'
    });
}
processCtrl.deleteProcess = async(req, res) => {
    await Process.findOneAndRemove(req.params.id);
    res.json({status:'Process Deleted'});
}

processCtrl.updateProcess= async(req, res) => {
    const {id} =req.params;
    const process = {
        name:req.body.name,
        gdate: req.body.gdate
    };
    await Process.findByIdAndUpdate(id, {$set: process}, {new:true});
    res.json({status:"Process Updated"});
}
module.exports = processCtrl;