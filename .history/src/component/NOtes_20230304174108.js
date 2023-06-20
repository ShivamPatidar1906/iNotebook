import React, {useContext} from 'react'
import noteContext from "../context/notes/NotesContext"
import Noteitem from './Noteitem';


const Notes = () => {
    const context = useContext(noteContext);
    const {notes, setNotes} = context;
    return (
        <div className="">
            <h2>Your Notes</h2> 
            <div className=''>
            {notes.map((note)=>{
                return <Noteitem key={note._id} note={note}/>  
            })}
            </div>
            </div>
    )
}

export default Notes