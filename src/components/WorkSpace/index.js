import React from "react";
import "./workSpace.scss";

function WorkSpace() {
  return (
    <div className="workspace">
      <div className="workspace-time">07/05/2023, 21:24</div>

      <div className="workspace-title">
        <input
          className="workspace-title-input"
          type="text"
          placeholder="Title"
          autoFocus
        />
      </div>

      <div className="workspace-textarea">
        <textarea/>
      </div>
    </div>
  );
}

export default WorkSpace;
