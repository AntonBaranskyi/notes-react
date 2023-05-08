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
  const { add, deleteRecord, getAll } = useIndexedDB("notes");
  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState(false);
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
  };

  const getActiveNote = () => {
    return notes.find(({ id }) => id === activeNote);
  };

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
