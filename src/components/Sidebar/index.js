import ListItem from "../ListItem";
import "./sideBar.scss";

function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar-notes">
        <ListItem />
      </div>
    </div>
  );
}

export default SideBar;
