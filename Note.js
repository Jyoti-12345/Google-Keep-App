import React from 'react';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

function Note(props) {
    const deleteNote =()=>{
     props.DeletItem(props.id)
    }
    return (
      <div className="main-container">
        <div className="div-note">
          <h2>{props.title}</h2>
          <br></br>
          <p>{props.content}</p>
          <button onClick={deleteNote} className="btn-red">
          <DeleteForeverIcon/>
          </button>
        </div>
      </div>
    )
}

export default Note
