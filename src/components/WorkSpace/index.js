import React, { useContext, useRef } from "react";
import "./workSpace.scss";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { NotesContext } from "../../App";

function WorkSpace() {
  const { getActiveNote, onUpdateNote, textRef } = useContext(NotesContext);

  let active = getActiveNote();

  const onEditField = (field, value) => {
    onUpdateNote({
      ...active,
      [field]: value,
      lastModified: Date.now(),
    });
  };

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
          onChange={(e) => onEditField("title", e.target.value)}
        />
      </div>

      <div className="workspace-textarea">
        <textarea
          ref={textRef}
          placeholder={active.text}
          onChange={(e) => onEditField("text", e.target.value)}
        />
      </div>
    </div>
  );
}

export default WorkSpace;
