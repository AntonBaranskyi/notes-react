import React from "react";
import { useContext } from "react";
import { NotesContext } from "../../App";

function ListItem() {
  const { notes, activeNote, setActiveNote } = useContext(NotesContext);
  console.log(notes);

  if (notes.length === 0) {
    return <div>No Notes</div>;
  }

  return (
    <>
      {notes.map(({ title, text, id }) => {
        return (
          <div
            onClick={() => setActiveNote(id)}
            key={id}
            className={`sidebar-notes-note ${activeNote === id && "active"}`}
          >
            <div className="sidebar-title">
              <h2>{title}</h2>
            </div>

            <p>{text}</p>
            <small className="note-meta">Last Modified 07/05/2023, 21:24</small>
          </div>
        );
      })}
    </>
  );
}

export default ListItem;
