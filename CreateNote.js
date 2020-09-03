import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';

function CreateNote(props) {

    const [note, setNote] = useState({
        title:"",
        content: "",
    })

    const inputEvent = (event) =>{
        const {name, value} = event.target;
        setNote((prevData) => {
         return{
             ...prevData,
             [name] : value
         };
        });
    }

    const AddEvent =(e) =>{
        e.preventDefault();
       props.passnote(note);
       setNote({
        title:"",
        content: "",
    })
    }
    return (
      
            <form>
              <div className="main-div">
               <div className="main-note">
                <input type="text" 
                placeholder="Title"
                value={note.title}
                name="title"
                onChange={inputEvent}
                autoComplete="off"
                 />
                <textarea 
                placeholder="Write note here..."
                value={note.content}
                name="content"  
                onChange={inputEvent}

                 />
                <button onClick={AddEvent} className="btn-green">
                
                <AddIcon/>
                </button>
              </div>
             </div>   
            </form>
        
    )
}

export default CreateNote
