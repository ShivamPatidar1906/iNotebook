import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const EventEmitter = require('events')
const event = new EventEmitter();

const User = () => {
  let navigate = useNavigate();
  const [credentials, setCredentials] = useState({id:"", name: "", email: ""}) 
  event.on('handleUserClick',async ()=>{
    if(!localStorage.getItem('token'))
  {
    navigate('/Login')
  }
    // e.preventDefault();

    const response = await fetch("http://localhost:5000/api/auth/getuser", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('token')
        },
        
    });
    const json = await response.json()
    setCredentials({id:json._id, name:json.name, email:json.email})

  })

 
  return (
    <div>
      {event.emit('handleUserClick')}
      <h3>User Details</h3>
      username:- {credentials.name}
    </div>
  )
}

export default User
