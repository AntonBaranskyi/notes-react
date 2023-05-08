import React from "react";
import "./header.scss";
import plus from "../../assets/plus.png";
import remove from "../../assets/delete.png";
import edit from "../../assets/edit.png";
import Search from "../Search";

import { useContext } from "react";
import { NotesContext } from "../../App";

const headerData = [
  { img: plus, alt: "plus" },
  { img: remove, alt: "remove" },
  { img: edit, alt: "edit" },
];

function Header() {
  const { addNote } = useContext(NotesContext);
  return (
    <header className="header">
      <nav className="header__nav">
        {headerData.map(({ img, alt }) => {
          return (
            <React.Fragment key={alt}>
              <div className="header__nav-item">
                <img
                  onClick={alt === "plus" ? addNote : null}
                  src={img}
                  alt={alt}
                />
              </div>
            </React.Fragment>
          );
        })}
      </nav>
      <Search />
    </header>
  );
}

export default Header;
