import React from "react";

const Noteitem = (props) => {
  const { note } = props;
  return (
    <div className="col-md-3">
        <div class="card my-3"> 
            <div class ="card-body">
                <h5 className="card-title">My title</h5>
                <i class="fa-light fa-file-xmark"></i>
                <p className="card-text">My desc</p>
            </div>
        </div>
    </div>
  );
};

export default Noteitem;
