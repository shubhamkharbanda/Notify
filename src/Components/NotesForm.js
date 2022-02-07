
import React, {useContext} from 'react';
import { NotesContext } from '../Context/NotesContext';
export default function NotesForm() {

    // const on_submit=()=>{
    //     preventDefault(e);
    // }
      const {aid,Setaid,on_changeh,on_changed,on_changet,description,heading,tag,AddNote}=useContext(NotesContext)
    return (<div>


<form>
  <div class="form-group">
    <label for="exampleInputEmail1">Note Heading</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Heading" value={heading} onChange={on_changeh}/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Description</label>
    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Description" value={description} onChange={on_changed}/>
  </div>


  <div class="form-group">
    <label for="exampleInputPassword1">Tag</label>
    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Tag" value={tag} onChange={on_changet}/>
  </div>

  <br/>
  
  
  <button type="button" class="btn btn-danger" onClick={AddNote}  >Add Note</button>
</form>
  </div>);
}
