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
const CartDetails = mongoosee.Schema({

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
const mongooseee= require('mongoose')

const UserDetails=mongoose.Schema({
    UserName:
    {
        type:String,
        required:true
    },
    EmailAddress:
    {
        type:String,
        required:true,
        unique:true,

    },
    Password:
    {
        type:String,
        required:true,
        unique:true
    }
})
const prodd=mongoose.model('prod',prod)
const CartDetail=mongoose.model('CartDetails',CartDetails)
const UserDetail = mongoose.model('UserDetails',UserDetails)

module.exports=({prodd,CartDetail,UserDetail});