import React from 'react'

const Noteitem = (props) => {
    const { note } = props;
    return (
        <div class="card">
        <div class="card-body">
          <h5 class="card-title">{note.title}</h5>
          <p class="card-text">{}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
}

export default Noteitem