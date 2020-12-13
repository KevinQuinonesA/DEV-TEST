const express = require('express');
const app=express();
const cors=require('cors');
//const indexRoutes = require('./routes/index');
const productRoutes = require('./routes/product.routes');
const processRoutes = require('./routes/process.routes');
const morgan = require('morgan');
const {mongoose}= require('./database'); 

//settings
app.set('port', process.env.PORT ||3000);

//middlewares
app.use(cors());
app.use(express.json()); //receive from json
app.use(morgan('dev'));

//routes
//app.use(indexRoutes);
app.use('/api',productRoutes);
app.use('/api',processRoutes);

//static files

//start server
app.listen(app.get('port'),()=>{
    console.log('server on port ', app.get('port'));
});