import NotesContext from "./NotesContext";
import { useState } from "react";

const NoteState = (props)=>{
  const notesInitial = [
    {
      "_id": "61322f19553781a8ca8d0e06",
      "user": "6131dc5e3e4037cd4734a066",
      "title": "My Title",
      "description": "Please wake up early",
      "tag": "personal",
      "date": "2021-09-03T14:20:09.509Z",
      "__v": 0
    },
    {
      "_id": "61322f19553781a8ca8d0e081",
      "user": "6131dc5e3e4037cd4734a066",
      "title": "My Title",
      "description": "Please wake up early",
      "tag": "personal",
      "date": "2021-09-03T14:20:09.668Z",
      "__v": 0
    },
    {
      "_id": "61322f19553781a8ca8d0e028",
      "user": "6131dc5e3e4037cd4734a066",
      "title": "My Title",
      "description": "Please wake up early",
      "tag": "personal",
      "date": "2021-09-03T14:20:09.668Z",
      "__v": 0
    },
    {
      "_id": "61322f19553781a8ca8d0e048",
      "user": "6131dc5e3e4037cd4734a066",
      "title": "My Title",
      "description": "Please wake up early",
      "tag": "personal",
      "date": "2021-09-03T14:20:09.668Z",
      "__v": 0
    },
    {
      "_id": "61322f19553781a8ca8d0e078",
      "user": "6131dc5e3e4037cd4734a066",
      "title": "My Title",
      "description": "Please wake up early",
      "tag": "personal",
      "date": "2021-09-03T14:20:09.668Z",
      "__v": 0
    },
    {
      "_id": "61322f19553781a8ca8d0e08",
      "user": "6131dc5e3e4037cd4734a066",
      "title": "My Title",
      "description": "Please wake up early",
      "tag": "personal",
      "date": "2021-09-03T14:20:09.668Z",
      "__v": 0
    },
    {
      "_id": "61322f19553781a8ca8d0e08",
      "user": "6131dc5e3e4037cd4734a066",
      "title": "My Title",
      "description": "Please wake up early",
      "tag": "personal",
      "date": "2021-09-03T14:20:09.668Z",
      "__v": 0
    },
  ]
  const [notes, setNotes] = useState(notesInitial)
  return (
    <NotesContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NotesContext.Provider>
    )
}
export default NoteState;