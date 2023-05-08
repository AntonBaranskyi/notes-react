import Header from "./components/Header";
import SideBar from "./components/Sidebar";
import WorkSpace from "./components/WorkSpace";
import { DBConfig } from "./DB/DbConfig";
import { initDB } from "react-indexed-db";
import { useIndexedDB } from "react-indexed-db";
import { createContext, useEffect, useState, useRef } from "react";
import uniqid from "uniqid";

export const NotesContext = createContext();

initDB(DBConfig);

function App() {
  const { add, deleteRecord, getAll, update } = useIndexedDB("notes");
  const [notess, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState(false);
  const [search, setSearch] = useState("");
  const textRef = useRef(null);

  useEffect(() => {
    getAllNotes();
  }, []);

  const addNote = async () => {
    const newNote = {
      title: "Untitlled note",
      text: "",
      lastModified: Date.now(),
      id: uniqid(),
    };

    add(newNote).then(() => {
      setNotes((prevNotes) => [newNote, ...prevNotes]);
      setActiveNote(newNote.id);
    });
  };

  const getAllNotes = async () => {
    getAll().then((answ) => {
      console.log(answ);
      setNotes(answ);
    });
  };

  const deleteNote = (id) => {
    deleteRecord(id)
      .then(() => {
        console.log("Deleted!");
        setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
      })
      .catch((err) => console.log("Error " + err));
  };

  const onUpdateNote = (updatedNote) => {
    const updatedNotesArr = notes.map((note) => {
      if (note.id === updatedNote.id) {
        return updatedNote;
      }

      return note;
    });

    setNotes(updatedNotesArr);

    update(updatedNote).then(() => console.log("Updated"));
  };

  const onSearch = (items, term) => {
    if (term.length === 0) {
      return items;
    }

    return items.filter(
      (item) =>
        item.title.toLowerCase().indexOf(term) > -1 ||
        item.text.toLowerCase().indexOf(term) > -1
    );
  };

  const getActiveNote = () => {
    return notess.find(({ id }) => id === activeNote);
  };

  const notes = onSearch(notess, search);

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }} className="App">
      <NotesContext.Provider
        value={{
          notes,
          activeNote,
          textRef,
          setActiveNote,
          addNote,
          deleteNote,
          getActiveNote,
          onUpdateNote,
          setSearch,
        }}
      >
        <Header />
        <SideBar />
        <WorkSpace />
      </NotesContext.Provider>
    </div>
  );
}

export default App;
