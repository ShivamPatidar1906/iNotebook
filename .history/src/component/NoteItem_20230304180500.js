import React from "react";

const Noteitem = (props) => {
  const { note } = props;
  return (
    <div className="col-md-3">
      <div class="card my-3">
        <div class="card-body">
          <div className="d-flex align-items-center">
            <h5 className="card-title">{note.title}</h5>
            <i class="fa-light fa-file-xmark"></i>
            <i className="far fa-edit mx-2"></i>
          </div>
          <p className="card-text">My desc</p>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
