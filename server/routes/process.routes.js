const router= require('express').Router();
const processCtrl= require('../controller/process.controller')
const express = require("express");

// GET All processes
router.get('/processes', processCtrl.getProcesses);
// Single Process
router.get('/processes/:id',processCtrl.getProcess);
// Add a process
router.post('/processes',processCtrl.createProcess);
// Delete process
router.delete('/processes/:id', processCtrl.deleteProcess);

// Update process
router.put('/processes/:id', processCtrl.updateProcess);


module.exports = router;