const express = require('express');
const app = express();
const port = 3000;
const connectdb= require("./db/db");
app.use(express.json());
const index = require('./Routes/routes');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('./swaggerconfig');
require('dotenv').config();
require('dotenv').config();
app.use(express.json());
const cors = require('cors');
app.use(cors());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Allow all origins
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});



app.use('/index/details',index);

apis:['./Controller/controller'];
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJsdoc));






app.get("/",(req,res) => {
    // console.log(request.body)
    res.send("Hello")
})
// server banyo

MONGO_URI = "mongodb+srv://dalley_user_20599:dalley_user_20599@cluster0.7cf3b.mongodb.net/"


const start = async () => 
    {
        try
        {
            await connectdb(MONGO_URI);
            //const client = new MongoClient(URL);
            app.listen(port,console.log(`Server is listening on port ${port}`));
                    
                }
                catch(err){console.log(err)}
            }
            
            start();

