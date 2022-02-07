import React,{useContext, useEffect} from 'react';

import { NotesContext } from '../Context/NotesContext';
import Signup from './Signup';




export default function Noteitem(props) {
  var y="0";
  const {note,setNote,Login,postData}=useContext(NotesContext)
  const {aid,Setaid}=useContext(NotesContext)

  const handleDelete=async()=>{
    const response =await fetch(`http://localhost:5000/notes/deletenote/${props.id}`,{
        
        method: 'DELETE',
        headers: {
            'auth-token': aid,
            'Content-Type': 'application/json'
        },
             
    }

    )
    
    const a=await response.json()
    postData();
     }




     const UpdateNote=async()=>{
      const response =await fetch(`http://localhost:5000/notes/updatenote/${props.id}`,{
          
          method: 'PUT',
          headers: {
              'auth-token': aid,
              'Content-Type': 'application/json'
          },
          body:JSON.stringify({
              "title":"satyam kumar"
              ,"description":"going to office",
              "tag":'good morning'


          })
       
      }
      )
      
      console.log(response)
      postData();
       }


  return <div style={{margin:"7vw"}}>
    
      <div className="card" style={{width: "18rem"}}>
  
  <div className="card-body">
    <div className="text-center">
      
    <h5 className="card-title">{props.title}</h5>
    </div>

      
    <p className="card-text">{props.description}</p>
    
  </div>
    <div style={{display:"flex" , flexWrap:"wrap"}} >
    
    <a  >
      <i className="fas fa-trash-alt" style={{marginLeft:"4vw",marginTop:"1vw"}  } id="name" onClick={handleDelete}></i>
      <i className="fas fa-edit" style={{marginLeft:"6vw",marginTop:"1vw"} } id="name" onClick={UpdateNote}></i>
      </a>

    </div>

 
</div>

  </div>;
}
