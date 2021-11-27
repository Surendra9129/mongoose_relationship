const port=5000;
const express=require('express');
const mongoose=require('mongoose');
const app=express();
app.use(express.json());

const connect=()=>{
    return mongoose.connect(``);
}

// user schema
const userSchema=mongoose.Schema(
    {

    },
    {
     virsionKey:false,
     timestap:true
    }
)

const user=mongoose.model('user',userSchema);


app.listen(port,async()=>{
    await connect();
    console.log(`running on port ${port}`);
})
