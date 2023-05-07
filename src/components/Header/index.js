import React from "react";
import "./header.scss";
import plus from "../../assets/plus.png";
import remove from "../../assets/delete.png";
import edit from "../../assets/edit.png";
import Search from "../Search";

const headerData = [
  { img: plus, alt: "plus" },
  { img: remove, alt: "remove" },
  { img: edit, alt: "edit" },
];

function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
        {headerData.map(({ img, alt }) => {
          return (
            <>
              <div className="header__nav-item">
                <img src={img} alt={alt} />
              </div>
            </>
          );
        })}
      </nav>
      <Search />
    </header>
  );
}

export default Header;
