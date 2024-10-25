const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://satishkanaujiya19:5RSerg20gqEfThtT@restro-cluster.5i4xf.mongodb.net/Restro').then((res)=>{
    console.log('Database Connected Succesfully');
}).catch((err)=>{
    console.log('err',err);
    
})