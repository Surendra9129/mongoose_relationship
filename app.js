const port=5000;
const express=require('express');
const mongoose=require('mongoose');
const app=express();
app.use(express.json());

const connect=()=>{
    return mongoose.connect(`mongodb+srv://surendra:ssurendra9@cluster0.n3ctp.mongodb.net/Library`);
}

// user schema
const userSchema=mongoose.Schema(
    {
      first_name:{type: String, required:true},
      last_name:{type: String, required:true}
    },
    {
     versionKey:false,
     timestamps:true
    }
);

const user=mongoose.model('user',userSchema);

app.get('/users',async(req,res)=>{
    const new_user=await user.find({}).lean().exec();
    res.send({new_user});
})

app.post('/users',async(req,res)=>{
    const new_user=await user.create(req.body);
    res.status(201).send({new_user});
})

app.patch('/users/:id',async(req,res)=>{
    const new_user=await user.findByIdAndUpdate(req.params.id, req.body, {new:true});
    res.status(201).send({new_user});
})

app.get('/users/:id',async(req,res)=>{
    const new_user=await user.findById(req.params.id);
    res.send({new_user});
})

app.delete('/users/:id', async(req,res)=>{
    const new_user=await user.findByIdAndDelete(req.params.id);
    res.send({new_user});
})

//book shcema
const bookSchema=mongoose.Schema(
    {
      name:{type:String, required:true},
      body:{type:String, required:true},
      author_ids:[{
         type:mongoose.Schema.Types.ObjectId,
         ref:"aurthor",
         required:true,
      }],
      check_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"check",
        required:true
    }
    },
    {
        versionKey:false,
        timestamps:true
    }
);

const book=mongoose.model('book',bookSchema);


app.get('/books',async(req,res)=>{
    const new_book=await book.find({}).lean().exec();
    res.send({new_book});
})

app.post('/books',async(req,res)=>{
    const new_book=await book.create(req.body);
    res.status(201).send({new_book});
})

app.patch('/books/:id',async(req,res)=>{
    const new_book=await book.findByIdAndUpdate(req.params.id, req.body, {new:true});
    res.status(201).send({new_book});
})

app.get('/books/:id',async(req,res)=>{
    const new_book=await book.findById(req.params.id);
    res.send({new_book});
})

app.delete('/books/:id', async(req,res)=>{
    const new_book=await book.findByIdAndDelete(req.params.id);
    res.send({new_book});
})

// aurthor schema
const aurthorSchema=mongoose.Schema(
    {
          first_name:{type:String, required:true},
          last_name:{type:String, required:true},

    },
    {
        versionKey:false,
        timestamps:true
    }
)

const aurthor=mongoose.model('aurthor',aurthorSchema);

app.get('/aurthors',async(req,res)=>{
    const new_aurthor=await aurthor.find({}).lean().exec();
    res.send({new_aurthor});
})

app.post('/aurthors',async(req,res)=>{
    const new_aurthor=await aurthor.create(req.body);
    res.status(201).send({new_aurthor});
})

app.patch('/aurthors/:id',async(req,res)=>{
    const new_aurthor=await aurthor.findByIdAndUpdate(req.params.id, req.body, {new:true});
    res.status(201).send({new_aurthor});
})

app.get('/aurthors/:id',async(req,res)=>{
    const new_aurthor=await aurthor.findById(req.params.id);
    res.send({new_aurthor});
})

app.delete('/aurthors/:id', async(req,res)=>{
    const new_aurthor=await aurthor.findByIdAndDelete(req.params.id);
    res.send({new_aurthor});
})

// check out

const chek_outSechema=mongoose.Schema(
    {
       user_id:{
           type:mongoose.Schema.Types.ObjectId,
           ref:"user",
           required:true
       },
 
    },
    {
        versionKey:false,
        timestamps:true
    }
)
const check_out=mongoose.model('check_out',chek_outSechema);


app.get('/checks',async(req,res)=>{
    const new_check=await check_out.find({}).lean().exec();
    res.send({new_check});
})

app.post('/checks',async(req,res)=>{
    const new_check=await check_out.create(req.body);
    res.status(201).send({new_check});
})

app.patch('/checks/:id',async(req,res)=>{
    const new_check=await check_out.findByIdAndUpdate(req.params.id, req.body, {new:true});
    res.status(201).send({new_check});
})

app.get('/checks/:id',async(req,res)=>{
    const new_check=await check_out.findById(req.params.id);
    res.send({new_check});
})

app.delete('/checks/:id', async(req,res)=>{
    const new_check=await check_out.findByIdAndDelete(req.params.id);
    res.send({new_check});
})

// section schema
const sectionScema=mongoose.Schema(
    {
        book_ids:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:"book",
            required:true
        }]
    },
    {
        versionKey:false,
        timestamps:true
    }
)
const section=mongoose.model('section',sectionScema);


app.get('/sections',async(req,res)=>{
    const new_section=await section.find({}).lean().exec();
    res.send({new_section});
})

app.post('/sections',async(req,res)=>{
    const new_section=await section.create(req.body);
    res.status(201).send({new_section});
})

app.patch('/sections/:id',async(req,res)=>{
    const new_section=await section.findByIdAndUpdate(req.params.id, req.body, {new:true});
    res.status(201).send({new_section});
})

app.get('/sections/:id',async(req,res)=>{
    const new_section=await section.findById(req.params.id);
    res.send({new_section});
})

app.delete('/sections/:id', async(req,res)=>{
    const new_section=await section.findByIdAndDelete(req.params.id);
    res.send({new_section});
})

app.listen(port,async()=>{
    await connect();
    console.log(`running on port ${port}`);
})
