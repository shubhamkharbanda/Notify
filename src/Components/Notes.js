import React,{useContext, useEffect} from 'react';
import Noteitem from './Noteitem';
import { NotesContext } from '../Context/NotesContext';
import Signup from './Signup';
import axios from 'axios';




export default function Notes() {
    const {aid,Setaid}=useContext(NotesContext)
    const {state}=useContext(NotesContext)
    const {note,setNote,Login,postData,AddNote,logout,userName,UserData}=useContext(NotesContext)
    
    


    
        
            
            return (<>
  
     

      <Signup/>
      <br/>
      <br/>
      <button type="button" class="btn btn-danger" onClick={postData} >View Note</button>
      
      <button type="button" class="btn btn-danger" onClick={UserData} >User Info</button>
      <br/>
      <br/>
      
      <h6>{userName}</h6>
  <div style={{display:'flex' ,flexWrap:"wrap",justifyItems:"center"}}>
  
      {
     
          note.map((element)=>{
              if(note==[]){
                  return(<><h1>You are logged out</h1></>)
              }              
              else{
              return(<>


              

                  <Noteitem title={element.title} description={element.description} id={element._id} />

              </>
              )
              }
          

              
              
            })

}

      



  </div>
        
            
            
        </>
 
  )
}
