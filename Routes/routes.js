const express=require('express');
const router=express.Router();
const{PostProduct,UpdateProduct,GetAllCategory,PostAllCategory,}=require('../Controller/controller');

router.route('/Product/').post(PostProduct);
router.route('/Product/:PrdId').put(UpdateProduct);
router.route('/getallcartdetails').get(GetAllCategory);
router.route('/postcartdetails').post(PostAllCategory);

module.exports=router;



