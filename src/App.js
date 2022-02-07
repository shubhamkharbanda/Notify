import React,{useState,useContext} from "react";
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './Components/Navbar';
import Signup from './Components/Signup'
import { NotesContext } from './Context/NotesContext';
import Notes from "./Components/Notes";
import Signin from "./Components/Signin";
import axios from "axios";
import NotesForm from "./Components/NotesForm";




function  App() {
  const[state,setState]=useState("hello")
  const[note,setNote]=useState([])
  const[aid,Setaid]= useState(" ")
  const[email,setEmail]=useState("")
 
  const[password,setPass]=useState("")
  const[userName,setName]=useState("")
  const[heading,setHead]=useState("")
  const[description,setDesc]=useState("")
  const[tag,setTag]=useState("")

  async function Login(){
    const response =await fetch("http://localhost:5000/auth/login",{
        
        method: 'POST',
        
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
          {
            "email": email,
            "password": password
          }
          
          )
          
        },
        
    
    )

    
    const ay=await response.json()
    await Setaid(ay.Token)
    if(!aid){
      console.log('not loggedin')
    }
    else
     await console.log('loggedin')
     postData();
    
   
     }


     async function postData(){
       if(aid==" "){
         setNote([])
       }
       else{
        
      const response =await fetch("http://localhost:5000/notes/fetchallnotes",{
          
          method: 'GET',
          headers: {
              'auth-token': aid,
              'Content-Type': 'application/json'
          }
       
      }
      )
      
      const ay=await response.json()
      setNote(ay) 
      setName("")
      }}

      async function UserData(){
        
         
       const response =await fetch("http://localhost:5000/auth/getuser",{
           
           method: 'GET',
           headers: {
               'auth-token': aid,
               
           }
        
       }
       )
      var ai=await response.json()
      setName("Welcome"+" "+ai.details.name)
       
       }
    

  
      const AddNote=async()=>{
        const response =await fetch("http://localhost:5000/notes",{
            
            method: 'POST',
            headers: {
                'auth-token': aid,
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                "title":heading
                ,"description": description,
                "tag": tag


            })
         
        }
        )
         
        const a=await response.json()
        postData();
         }

         async function logout(){
             Setaid(" ")
             await postData()
             
             


        }


        const on_change=async(e)=>{

          setEmail(e.target.value)
          console.log(email)
        }
        const on_changep=async(e)=>{

          await setPass(e.target.value)
        }
        const on_changeh=async(e)=>{

          setHead(e.target.value)
          console.log(heading)
          
        }
        const on_changed=async(e)=>{

          setDesc(e.target.value)
          
        }
        const on_changet=async(e)=>{

          setTag(e.target.value)
          
        }
        
  
  
  return (
    <Router>

      <NotesContext.Provider value={{state,setState,note,setNote,aid,Setaid,Login,postData,logout,AddNote,on_change,email,setEmail,password,setPass,on_changep,userName,setName,UserData,on_changeh,on_changed,on_changet,description,heading,tag}}>



      


      <Navbar/>

        
      <Switch>
        

<Route exact path="/">
  <Notes/>
 <Signin/>
 <br/>
 <br/>
 <br/>
 <br/>
      <NotesForm/>






</Route>

<Route exact path="/Signup">
  

  <Signup/>
  
  




</Route>

      </Switch>



      </NotesContext.Provider >


   


    </Router>
   

    


    
    
  );
}

export default App;








   

  
  
 
