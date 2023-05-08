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
      <div className="workspace-time">
        {new Date(active.lastModified).toLocaleDateString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </div>

      <div className="workspace-title">
        <input
          className="workspace-title-input"
          type="text"
          placeholder="Title"
          autoFocus
          value={active.title}
          onChange={(e) => onEditField("title", e.target.value)}
          maxLength={200}
        />
      </div>

      <div className="workspace-textarea">
        <textarea
          ref={textRef}
          value={active.text}
          onChange={(e) => onEditField("text", e.target.value)}
          maxLength={2000}
        />
      </div>

      <div className="workspace-markdown">
        <h2 className="workspace-markdown__title">{active.title} </h2>
        <ReactMarkdown className="workspace-markdown__self">
          {active.text}
        </ReactMarkdown>
      </div>
    </div>
  );
}

export default WorkSpace;
