const mongoose= require('mongoose')

const prod = mongoose.Schema({

    PrdId:
    {
        type : String,
        required : true,
        unique : true
    },

    PrdName:
    {
        type: String,
        required:true
    },

    PrdCategory:
    {
        type:String,
        required:true
    }
})

//module.exports = mongoose.model('prod',prod);
// const prd = ()=>{
//     console.log("chup mula");
// }
// module.exports=prd;

const mongoosee =require('mongoose')
const CartDetails = mongoose.Schema({

    PrdId:
    {
        ref:'prod',
        type:String,
        required:true,
        unique:false
    },
    Total:
    {
        type:String,
        required:true
    }
})
const prodd=mongoose.model('prod',prod)
const CartDetail=mongoose.model('CartDetails',CartDetails)

module.exports=({prodd,CartDetail});