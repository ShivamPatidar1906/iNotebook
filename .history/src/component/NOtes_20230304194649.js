import React, {useContext} from 'react'
import NotesContext from "../context/notes/NotesContex
import Noteitem from './Noteitem';
import AddNote from './AddNote';

const Notes = () => {
    const context = useContext(noteContext);
    const {notes, setNotes} = context;
    return (
        <div>
            <h2>Your Notes</h2> 
            <div className='row my-3'>
            {notes.map((note)=>{
                return <Noteitem key={note._id} note={note}/>  
            })}
            </div>
            </div>
    )
}

export default Notes