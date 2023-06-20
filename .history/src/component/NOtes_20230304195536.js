import React, {useContext} from 'react'
import NotesContext from "../context/notes/NotesContext"
import Noteitem from './Noteitem';
import AddNote from './AddNote';

const Notes = () => {
    const context = useContext(NotesContext);
    const [notes, setNotes] = useState(notesInitial)
     // Add a Note
     const addNote = (title, description, tag)=>{
        // TODO: API Call
        console.log("Adding a new note")
        const note = {
          "_id": "61322f119553781a8ca8d0e08",
          "user": "6131dc5e3e4037cd4734a0664",
          "title": title,
          "description": description,
          "tag": tag,
          "date": "2021-09-03T14:20:09.668Z",
          "__v": 0
        };
        setNotes(notes.concat(note)) 
      }

      // Delete a Note
      const deleteNote = ()=>{

      }
      // Edit a Note
      const editNote = ()=>{

      }
    return (
        <>
        <AddNote/>
        <div>
            <h2>Your Notes</h2> 
            <div className='row my-3'>
            {notes.map((note)=>{
                return <Noteitem key={note._id} note={note}/>  
            })}
            </div>
            </div>
            </>
    )
}

export default Notes