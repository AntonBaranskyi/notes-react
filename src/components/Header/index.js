import React, { useContext } from "react";
import "./header.scss";
import plus from "../../assets/plus.png";
import remove from "../../assets/delete.png";
import edit from "../../assets/edit.png";
import Search from "../Search";

import { NotesContext } from "../../App";

const headerData = [
  { img: plus, alt: "plus" },
  { img: remove, alt: "remove" },
  { img: edit, alt: "edit" },
];

function Header() {
  const { addNote, deleteNote, activeNote, textRef } = useContext(NotesContext);

  const handleDeleteNote = () => {
    deleteNote(activeNote);
  };

  return (
    <header className="header">
      <nav className="header__nav">
        {headerData.map(({ img, alt }) => {
          const isInactive =
            !activeNote && (alt === "remove" || alt === "edit");
          const classNames = `header__nav-item ${isInactive ? "inactive" : ""}`;

          return (
            <div className={classNames} key={alt}>
              <img
                onClick={() =>
                  alt === "plus"
                    ? addNote()
                    : alt === "remove"
                    ? handleDeleteNote()
                    : alt === "edit"
                    ? textRef.current.focus()
                    : null
                }
                src={img}
                alt={alt}
              />
            </div>
          );
        })}
      </nav>
      <Search />
    </header>
  );
}

export default Header;
