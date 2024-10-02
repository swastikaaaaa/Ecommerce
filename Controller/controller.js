const express = require('express');
const app=express();
app.use(express.urlencoded({ extended: true }));
const {prodd,CartDetail}=require("../Modules/prod");
app.use(express.json());
require('dotenv').config();


//const CartDetails = require("../Modules/CartDetails");



/**
 * @swagger
 * /index/details/Product/:
 *   post:
 *     summary: Create a new product
 *     description: Creates a new product using the provided data
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               PrdId:
 *                 type: string
 *               PrdName:
 *                 type: string
 *               PrdCategory:
 *                 type: string
 *     responses:
 *       200:
 *         description: The product that was created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 PrdId:
 *                   type: string
 *                 PrdName:
 *                   type: string
 *                 PrdCategory:
 *                   type: string
 *       400:
 *         description: Bad Request
 */


PostProduct = async(req,res)=>{
    console.log("k vako");
    try{
    
        let prds= new prodd({PrdId:req.body.PrdId,PrdName:req.body.PrdName,PrdCategory:req.body.PrdCategory})
        console.log(prds);
        console.log(req.body.PrdId)
        console.log(req.body);
        prds=await prds.save();
        res.send(prds);
    }

    catch(error){
        res.status(400).send(err.message);
        console.log(err.message);
        console.log("${err.message}");
    }
    
}
// PostProduct= app.post("/post",async(req,res)=>{
//     try{


    
//         let prds= new prodd({PrdId:req.body.PrdId,PrdName:req.body.PrdName,PrdCategory:req.body.PrdCategory})
//         console.log(prds);
//         console.log(req.body.PrdId)
//         console.log(req.body);
//         prds=await prds.save();
//         res.send(prds);
//     }

//     catch(error){
//         res.status(400).send(err.message);
//     }
    
// })

/**
 * @swagger
 * /index/details/Product/{id}:
 *   put:
 *     summary: Update a product by ID
 *     description: Updates the details of an existing product by ID.
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the product to update.
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               PrdName:
 *                 type: string
 *                 description: The updated name of the product.
 *                 example: "Updated Product"
 *               PrdCategory:
 *                 type: string
 *                 description: The updated category of the product.
 *                 example: "Updated Category"
 *     responses:
 *       200:
 *         description: Product updated successfully
 *       404:
 *         description: Product not found
 *       400:
 *         description: Bad request, validation errors
 */





UpdateProduct = async(req,res)=>{
    console.log(req.params.PrdId)
    prdss= await prodd.findOneAndUpdate({PrdId:req.params.PrdId},{PrdId:req.body.PrdId,PrdName:req.body.PrdName,PrdCategory:req.body.PrdCategory},{new:true});   //prdid:req.params.prdid     key deko value request gareko k 
    if(!prdss)return res.status(404).send("product not found");
    res.send(prdss);

}

/**
 * @swagger
 * /index/details/getallcartdetails:
 *   get:
 *     summary: Retrieve all categories
 *     description: Fetches a list of all categories from the CartDetail collection.
 *     responses:
 *       200:
 *         description: A list of categories.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     description: The unique identifier for a category.
 *                     example: 60f73bcf9e6b9c00123a4b6e
 *                   name:
 *                     type: string
 *                     description: The name of the category.
 *                     example: Electronics
 *                   description:
 *                     type: string
 *                     description: The description of the category.
 *                     example: All electronic gadgets and appliances.
 *       400:
 *         description: Bad request. Returns an error if the request fails.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Error message explaining why the request failed.
 *                   example: "Error fetching categories."
 */


GetAllCategory = async(req,res)=>{
    try{

    
    const CartDetaill=await CartDetail.find();
    console.log("err aayena");
    res.send(CartDetaill);
    }
    catch(error){
        res.status(400).send(error.message);

    }
    

}
/**
 * @swagger
 * /index/details/postcartdetails:
 *   post:
 *     summary: Create a new cart detail entry
 *     description: Adds a new entry to the CartDetail collection with a product ID and total amount.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               PrdId:
 *                 type: string
 *                 description: The product ID that the cart entry refers to.
 *                 example: 60f73bcf9e6b9c00123a4b6e
 *               Total:
 *                 type: number
 *                 description: The total amount for the product in the cart.
 *                 example: 1500
 *     responses:
 *       200:
 *         description: Successfully created a new cart detail entry.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   description: The unique identifier for the cart detail entry.
 *                   example: 61a6fd58fbc1a62a4fb68a47
 *                 PrdId:
 *                   type: string
 *                   description: The product ID associated with this cart detail.
 *                   example: 60f73bcf9e6b9c00123a4b6e
 *                 Total:
 *                   type: number
 *                   description: The total value for the product in the cart.
 *                   example: 1500
 *       400:
 *         description: Bad request. Returns an error if the request data is invalid.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Error message explaining why the request failed.
 *                   example: "PrdId is required."
 */



PostAllCategory = async(req,res)=>{
    try{

    

    CartDetailss= new CartDetail({PrdId: req.body.PrdId, Total:req.body.Total});
    CartDetailss=await CartDetailss.save();
    console.log(CartDetailss);
    res.send(CartDetailss);
    }
    catch(error){
        res.status(400).send(error.message);
    }

}

module.exports={
    PostProduct,UpdateProduct,GetAllCategory,PostAllCategory
}   

