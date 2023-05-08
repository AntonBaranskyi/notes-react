import React, { useState, useContext } from "react";
import "./workSpace.scss";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { NotesContext } from "../../App";

function WorkSpace() {
  const { getActiveNote } = useContext(NotesContext);
  const [markdown, setMarkdown] = useState("");

  let active = getActiveNote();

  if (!active) {
    return <h2 className="no-active">No active note!</h2>;
  }

  return (
    <div className="workspace">
      <div className="workspace-time">07/05/2023, 21:24</div>

      <div className="workspace-title">
        <input
          className="workspace-title-input"
          type="text"
          placeholder="Title"
          autoFocus
          value={active.title}
        />
      </div>

      <div className="workspace-textarea">
        <textarea
          value={active.text}
          onChange={(e) => setMarkdown(e.target.value)}
        />
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
}

export default WorkSpace;
