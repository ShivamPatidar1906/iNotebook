import React from "react";

const Noteitem = (props) => {
  const { note } = props;
  return (
    <div className="card mx-1 my-3">
      <div className="card-body">
        <h5 className="card-title">My title</h5>
        <p className="card-text">My desc</p>
      </div>
    </div>
  );
};

export default Noteitem;
