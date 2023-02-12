import React, { useContext, useEffect } from "react";
import noteContext from "../context/notes/NoteContext";
import AddNote from "./AddNote";
import NoteItem from "./NoteItem";

const Notes = () => {
  const { notes, getNotes } = useContext(noteContext);
  useEffect(() => {
    getNotes();
  }, []);
  return (
    <>
      <AddNote />
      <div className="container">
        <div className="row my-3">
          <h2>Your Notes</h2>
          {notes.map((note) => {
            return <NoteItem key={note._id} note={note} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Notes;
