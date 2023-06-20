import React, {useContext} from 'react'
import noteContext from "../context/notes/NotesContext"
import Noteitem from './Noteitem';
import AddNote from './AddNote';

const Notes = () => {
    const context = useContext(noteContext);
    const {notes, setNotes} = context;
    const {notes, addNote} = context;
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