import Header from "./components/Header";
import SideBar from "./components/Sidebar";
import WorkSpace from "./components/WorkSpace";

function App() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }} className="App">
      <Header />
      <SideBar />
      <WorkSpace />
    </div>
  );
}

export default App;
