const bcrypt = require('bcryptjs/dist/bcrypt');
const express = require('express')
const router = express.Router()
const { body, validationResult } = require('express-validator');
const Notes= require('../modals/Notes')
const User= require('../modals/User')
router.use(express.json())

const fetchuser=require('../Middleware/fetchuser');
const { request } = require('express');




//Saving Notes
router.post('/',fetchuser, [

  body('title').isLength({ min: 5 }),
  // password must be at least 5 chars long
  body('description').isLength({ min: 5 }),
  body('tag').isLength({ min: 5 })
] ,async (req, res)  => {

  const userid=req.user


//  const sec_pass= await pass.bcrypt.hash(pass,salt);
const errors = await validationResult(req);
if (!errors.isEmpty()) {
  return res.status(400).json({ errors: errors.array() });
}


res.json(req.body);
  
const note = await Notes.create({
  user:userid,
  title:req.body.title,

  description: req.body.description,
  tag: req.body.tag,

}) 



})

//Fetching Notes By ID

router.get('/fetchallnotes', fetchuser ,async (req, res)  => {



const userid=await req.user;



const notes=await Notes.find({user:userid});
if(!notes){

  return res.status('400').json('no notes')

}
else{

  return res.status('200').json(notes)
}


  










})

//Update Information

router.put('/updatenote/:id',fetchuser,async (req,res)=>{

  const newnote={}
  const userid=req.user
  const{tag,description,title}=req.body;
  if(tag){
      newnote.tag=tag
      
    }
    if(description){
      newnote.description=description
      
    }
    if(title){
      newnote.title=title
    }
    
    const note=await Notes.findById(req.params.id)
   
    
    
    if(note.user.toString()!=userid){
      return res.status('420').json('Bad Request')




  }
  else{

    let cy= await Notes.findByIdAndUpdate(req.params.id,{$set: newnote},{new:true})
    
    return res.status('200').json(newnote)
  }
  






})


//Delete Note


router.delete('/deletenote/:id',fetchuser,async (req,res)=>{

  
  const userid=req.user
  
    const note=await Notes.findById(req.params.id)
    if(!note){
      return res.status('420').json('This note does not exist')

    }
    
    
    if(note.user.toString()!=userid){
      return res.status('420').json('Bad Request')




  }
  else{

    let cy= await Notes.findByIdAndDelete(req.params.id)
    
    return res.status('200').json('Note Deleted')
  }
  






})




module.exports=router;