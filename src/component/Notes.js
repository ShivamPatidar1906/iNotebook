import React, {useContext, useEffect, useRef, useState} from 'react'
import NotesContext from "../context/notes/NotesContext"
import Noteitem from './Noteitem';
import { useNavigate } from 'react-router-dom';
import AddNote from './AddNote';

const Notes = (props) => {
    const context = useContext(NotesContext);
    const { notes, getNotes, editNote } = context;
    const {showAlert} = props;
    let navigate = useNavigate()
    useEffect(() => {
        if(localStorage.getItem('token'))
        {
            getNotes()
        }
        else{
            navigate("/Login")
        }
         // eslint-disable-next-line
    }, [])
    const updateNote=(currentNote)=>{
        ref.current.click();
        setNote({id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag:currentNote.tag})
        
    }
    const ref = useRef(null)
    const refClose = useRef(null)
    const [note, setNote] = useState({id: "", etitle: "", edescription: "", etag: ""})
    const handleClick = (e)=>{ 
        editNote(note.id, note.etitle, note.edescription, note.etag)
        refClose.current.click();
        showAlert('Notes edited successfully','success')
    }

    const onChange = (e)=>{
        setNote({...note, [e.target.name]: e.target.value})
    }
    return (
        <>
                <AddNote showAlert={showAlert}/>
                <button ref={ref}  type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
        </button>
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
            <form className="my-3">
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="etitle" name="etitle" value={note.etitle} aria-describedby="emailHelp" onChange={onChange} minLength={3} required/> 
                </div>
                <div className="mb-3">
                    <label htmlFor="edescription" className="form-label">Description</label>
                    <input type="text" className="form-control" id="edescription" value={note.edescription} name="edescription" onChange={onChange} minLength={5} required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Tag</label>
                    <input type="text" className="form-control" id="etag" value={note.etag} name="etag" onChange={onChange} minLength={3} required/>
                </div>
            </form>
            </div>
            <div className="modal-footer">
            <button disabled={note.etitle.length<5 || note.edescription.length<5} ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button onClick={handleClick} type="button" className="btn btn-primary">Update Note</button>
            </div>
            </div>
        </div>
        </div>
        <div>
            <h2>Your Notes</h2>
            <div className="row my-3">
            {notes.length===0 && <div className='container'>No notes to display</div>}
            {notes.map((note)=>{
                return <Noteitem key={note._id} showAlert={showAlert} updateNote={updateNote} note={note}/>  
            })}
            </div> 
            </div>
            </>
    )
}

export default Notes