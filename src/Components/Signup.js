import React ,{useState,useContext}from 'react'
import { NotesContext } from '../Context/NotesContext'



export default function  Signup()  {

  

  
 

    
    


    
   
    

  const {state,setState,on_change,email,setEmail,password,setPass,on_changep,Login}=useContext(NotesContext)

  
const on_Submit=(e)=>{


  e.preventDefault()
}
      
    
    

  
    
    
    return (
      
<>

      <div>
       
            <br/>

            <br/>  
            <form >
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" name="email" id="email" aria-describedby="emailHelp" value={email} onChange={on_change}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" name="password" id="password" value={password} onChange={on_changep} />
  </div>
 
  <button type="button" class="btn btn-danger" onClick={Login} style={{marginRight:"10vw"}} >Login</button>
</form>
        </div>
</>
    )
  }
  