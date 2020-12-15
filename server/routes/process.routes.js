const router= require('express').Router();
const processCtrl= require('../controller/process.controller')
const express = require("express");

// GET All processes
router.get('/products/:id/processes', processCtrl.getProcesses);
// Single Process
router.get('/products/:id/processes/:proid',processCtrl.getProcess);
// Add a process
router.post('/products/:id/processes',processCtrl.createProcess);
// Delete process
router.delete('/products/:id/processes/:proid', processCtrl.deleteProcess);

// Update process
router.put('/products/:id/processes/:proid', processCtrl.updateProcess);


module.exports = router;