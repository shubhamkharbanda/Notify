const bcrypt = require('bcryptjs/dist/bcrypt');
const express = require('express')
const router = express.Router()
const { body, validationResult } = require('express-validator');
const User= require('../modals/User')
const fetchuser=require('../Middleware/fetchuser')
router.use(express.json())




router.post('/', [

  body('email').isEmail(),
  // password must be at least 5 chars long
  body('password').isLength({ min: 5 }),
  body('name').isLength({ min: 3 })
] ,async (req, res)  => {


//  const sec_pass= await pass.bcrypt.hash(pass,salt);
const errors = await validationResult(req);
if (!errors.isEmpty()) {
  return res.status(400).json({ errors: errors.array() });
}

var bcrypt = await require('bcryptjs');
var salt = await bcrypt.genSaltSync(10);
var hash = await bcrypt.hashSync(req.body.password, salt);

  
const user = await User.create({
  email:req.body.email,

  password: hash,
  name: req.body.name,

}) 
res.json(req.body);

})



router.post('/login',[ body('email').isEmail()], async (req, res)  => {


//  const sec_pass= await pass.bcrypt.hash(pass,salt);
const errors = await validationResult(req);

if (!errors.isEmpty()) {
  return res.status(400).json({ errors:"Please enter valid credentialp"})}

  const {email,password}=await req.body;

 
  
  let user=await User.findOne({email})
  if(!user){
    return res.status(900).json({ errors: "Please enter correct credential" })}

 
const compare = await bcrypt.compare(password,user.password)


if(!compare){

  return res.status(900).json({ errors: "Please enter correct credentia" })}
  else{
    var jwt = require('jsonwebtoken');
    var token = jwt.sign( user.id , 'shubhamiscool$');

    return res.status(200).json({ Status: "Logedin",Token: token})}










  





})

//Router

router.get('/getuser',fetchuser, async (req, res)  => {


const userid=req.user;
console.log(userid)
const details=await User.findById(userid).select('-password');


return res.status('200').json({details})

})


module.exports=router;
