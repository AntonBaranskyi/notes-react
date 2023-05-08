import React from "react";
import { useContext } from "react";
import { NotesContext } from "../../App";

function ListItem() {
  const { notes, activeNote, setActiveNote } = useContext(NotesContext);
  console.log(notes);

  if (notes.length === 0) {
    return <h2 className="not-found">No Notes</h2>;
  }

  return (
    <>
      {notes.map(({ title, text, id, lastModified }) => {
        const max = 30;
        const new_text = text.length > max ? text.slice(0, max) + "..." : text;
        const new_title =
          title.length > max ? title.slice(0, max) + "..." : title;
        return (
          <div
            onClick={() => setActiveNote(id)}
            key={id}
            className={`sidebar-notes-note ${activeNote === id && "active"}`}
          >
            <div className="sidebar-title">
              <h2>{new_title}</h2>
            </div>

            <p>{new_text}</p>
            <small className="note-meta">
              Last Modified{" "}
              {new Date(lastModified).toLocaleDateString("en-GB", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </small>
          </div>
        );
      })}
    </>
  );
}

export default ListItem;
