import React, { useContext } from "react";
import noteContext from "../context/notes/NoteContext";
import NoteItem from "./NoteItem";

const Notes = () => {
  const { notes, setNotes } = useContext(noteContext);
  return (
    <div className="row my-3">
      <h2>Your Notes</h2>
      {notes.map((note) => {
        console.log(note);
        return <NoteItem note={note} />;
      })}
    </div>
  );
};

export default Notes;
