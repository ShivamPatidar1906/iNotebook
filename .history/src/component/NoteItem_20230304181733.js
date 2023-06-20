import React from "react";

const Noteitem = (props) => {
  const { note } = props;
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <h5 className="card-title">{note.title}</h5>
            <i className="far fa-trash-alt mx-2" style={{paddingLeft:'77px',paddingBottom:'15px'}}></i>
            <i className="far fa-edit mx-2"style={{paddingBottom:'12px'}}></i>
          </div>
          <p className="card-text">A card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options. If you’re familiar with Bootstrap 3, cards replace our old panels, wells, and thumbnails. Similar functionality to those components is available as modifier classes for cards</p>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
