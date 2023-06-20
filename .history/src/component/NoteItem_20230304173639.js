import React from "react";

const Noteitem = (props) => {
  const { note } = props;
  return (
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          My desc
        </p>
      </div>
    </div>
  );
};

export default Noteitem;
