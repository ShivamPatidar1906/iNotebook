import React, {useContext, useState} from 'react'
import NotesContext from "../context/notes/NotesContext"

const AddNote = (props) => {
    const context = useContext(NotesContext);
    const {addNote} = context;
    const {showAlert} = props;
    const [note, setNote] = useState({title: "", description: "", tag: ""})

    const handleClick = (e)=>{
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({title: "", description: "", tag: ""})
        showAlert('Notes added successfully','success')
    }

    const onChange = (e)=>{
        setNote({...note, [e.target.name]: e.target.value})
    }
    
        
        
    
    return (
        <div className="container my-3">
            <h2>Logged in</h2>
            <h4 style={{marginTop:'30px'}}>Add a Note</h4>
            <form className="my-3">
            <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" name="title" value={note.title} onChange={onChange}  minLength={3} required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" className="form-control" id="description" name="description" value={note.description} onChange={onChange}  minLength={5} required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Tag</label>
                    <input type="text" className="form-control" id="tag" name="tag" value={note.tag} onChange={onChange} minLength={3} required/>
                </div>
                <button disabled={note.title.length<5 || note.description.length<5} type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
            </form>
        </div>
    )
}

export default AddNote