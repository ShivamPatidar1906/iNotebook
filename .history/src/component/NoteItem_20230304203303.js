import React, {useContext} from 'react'
import NotesContext from "../context/notes/NotesContext"

const Noteitem = (props) => {
  const context = useContext(NotesContext);
    const { deleteNote } = context;
  const { note } = props;
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <div className="d-flex align-items-center">
          <h5 className="card-title">{note.title}</h5>
            <i className="far fa-trash-alt mx-2" onClick={()=>{deleteNote(note._id)}}></i>
            <i className="far fa-trash-alt mx-2" style={{paddingLeft:'77px',paddingBottom:'15px'}}></i>
            <i className="far fa-edit mx-2"style={{paddingBottom:'15px'}}></i>
          </div>
          <p className="card-text">{note.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
