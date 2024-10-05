const express = require('express');
const app = express();
const port = 3000;
const connectdb= require("./db/db");
app.use(express.json());
const index = require('./Routes/routes');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('./swaggerconfig');
require('dotenv').config();
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





//MongooseError: The `uri` parameter to `openUri()` must be a string, got "undefined". Make sure the first parameter to `mongoose.connect()` or `mongoose.createConnection()` is a string.err  
app.get("/",(req,res) => {
    // console.log(request.body)
    res.send("Hello")
})
// server banyo

const MONGO_URI = process.env.MONGO_URI;

function start()


{
    try
    {
        const start = async () => 
        await connectdb(process.env.MONGO_URI);
        //const client = new MongoClient(URL);
        app.listen(port,console.log(`Server is listening on port ${port}`));
        start();
        //console.log("MONGO_URI:", MONGO_URI);
        
    }
    catch(err){console.log(err)}
}


start();




