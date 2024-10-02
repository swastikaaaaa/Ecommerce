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

