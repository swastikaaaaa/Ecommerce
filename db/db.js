const mongoose = require('mongoose');

const connectdb = (url) => 
{
    return mongoose.connect(url)
    .then(()=>console.log("db connected"))
    .catch((err) => console.log(err+"err aayo"))
}

module.exports = connectdb;