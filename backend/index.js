require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const PORT=process.env.PORT||3001
const app = express();
// const router=express.Router();
app.use(express.json());

const connect = () => {
    return mongoose.connect(process.env.url
        , {

        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    });
};

const signupSchema=new mongoose.Schema(
    {
    email:{type:String,unique:true,required:true},
    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
   password:{type:String,required:true},
   country:{type:String,required:true}
},
{
    versionKey:false,
    timestamps:true
}
);

const signup=mongoose.model("signup",signupSchema)

const loginSchema=new mongoose.Schema({
    email :{type:String,required:true,trim:true},
    password:{type:String,required:true,trim:true}
});

const Login=mongoose.model("login",loginSchema)

const cartSchema=new mongoose.Schema(
    {
      product:{type:String,required:true,unique:true},
      price:{type:Number,required:true},
      quant:{type:Number,required:true},
      total:{type:Number,required:true},
      userId:{type:mongoose.Schema.Types.ObjectId,ref:"signup",required:true}
    }
)

const Cart=mongoose.model("cart",cartSchema)

app.post("/signup", async(req,res)=>{
    try{
      console.log(req.body.password)
        const hashedPassword = await bcrypt.hash(req.body.password,10)
        const newUser=
         {
             "firstName":req.body.firstName,
             "lastName":req.body.lastName,
             "email":req.body.email,
             "country":req.body.country,
             "password":hashedPassword
         
        }
       const user =await signup.create(newUser)
      
       return res.status(201).send({status:"ok"})
    }
    catch(err){
        return res.status(500).send({message:err})

    }
})

app.post("/login", async (req, res) => {
    try {
        
      const { email, password } = req.body;
 
      let user = await signup.findOne({email});
      
  
      if (!user) return res.status(400).send("User not found");
  
      const validPassword = await bcrypt.compare(password, user.password);
  
      if (!validPassword) return res.status(400).send("Please enter a valid password.");
  
   
      user.password = undefined;
  
     return res.status(201).send({user:{firstName:user.firstName,lastName:user.lastName,email:user.email,country:user.country}});
    } catch (err) {
      console.log(err);
      res.status(500).send("Something went wrong");
    }
  });


app.post('/cart', async (req, res) => {
    try{
    const cart = await Cart.create(req.body);
    res.status(201).json({ data: "done" });
    }
    catch(err){
        res.status(500).json({ message: "somethin wrong" });
    }
});

app.get('/cart/:userId',async(req,res)=>{
    try{
        console.log(req.params.userId)
     const cart=await Cart.find({userId:req.params.userId}).lean().exec();
     return res.status(201).send({cart})
    }
    catch(err){
 return res.status(500).send({err})
    }
})

app.delete("/cart/:id",async(req,res)=>{
    try{
      const cart=await Cart.findByIdAndDelete(req.params.id).lean().exec()
      return res.status(201).send({status:"Ok"})
    }
    catch(err){
        return res.status(500).send({err})
    }
})

app.patch('/cart/:id',async(req,res)=>{
    try{
   const cart=await Cart.findByIdAndUpdate(req.params.id,req.body,{new:true,}).lean().exec();
   console.log(cart)
   return res.status(201).send({cart})

    }catch(err){
        return res.status(500).send({err})
    }
})



async function start() {
    await connect();
    app.listen(PORT, function () {
        console.log(`Listening on port 8001`);
    })
}

start();