import React, { useState } from 'react';
import './index.css';
import Header from './component/Header';
import Footer from './component/Footer';
import CreateNote from './component/CreateNote';
import Note from './component/Note';
const App = (props) => {

  const [addItem, setAddItem] = useState([]);

  const addnote = (note) =>{
    // alert("I am clicked")
    setAddItem((prevData) =>{
      return[...prevData, note]
    })
  }

  const onDelete =(id)=>{
    setAddItem((oldData)=>(
      oldData.filter((currdata, indx)=>{
        return indx !== id
      })
    ))
  }
  return(
        <>
      <div>
        <Header/>
        <Footer/>
        <CreateNote passnote={addnote}/>
        {
          addItem.map((val, index)=>{
            return(
              <Note
            key={index} 
            id={index}
            title={val.title}
            content={val.content}
            DeletItem={onDelete}
            />
            )
          })
        }
      </div>
    </>
   )

 }

export default App