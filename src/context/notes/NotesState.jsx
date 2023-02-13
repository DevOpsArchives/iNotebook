import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const notesInitial = [];
  const host = import.meta.env.VITE_BACKEND_URL;
  const [notes, setNotes] = useState(notesInitial);

  // Get All Notes
  const getNotes = async () => {
    const response = await fetch(`${host}/api/notes/getAllNotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNlOTNjMjAxMTI2NzJlMjgxZDAxZDU0In0sImlhdCI6MTY3NjIzMDQ2N30.awMW8W4Drr0R_7XK9C7zkx43bJz4dP1zebUFL6zcbis",
      },
    });
    setNotes(await response.json());
  };

  // Add a Note
  const addNote = async (title, description, tag) => {
    const response = await fetch(`${host}/api/notes/addNote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNlOTNjMjAxMTI2NzJlMjgxZDAxZDU0In0sImlhdCI6MTY3NjIzMDQ2N30.awMW8W4Drr0R_7XK9C7zkx43bJz4dP1zebUFL6zcbis",
      },
      body: JSON.stringify({ title, description, tag }),
    });

    const json = await response.json();
    setNotes(notes.concat(json.note));
  };

  // Update a Note
  const updateNote = async (id, title, description, tag) => {
    const response = await fetch(`${host}/api/notes/updateNote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNlOTNjMjAxMTI2NzJlMjgxZDAxZDU0In0sImlhdCI6MTY3NjIzMDQ2N30.awMW8W4Drr0R_7XK9C7zkx43bJz4dP1zebUFL6zcbis",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = await response.json();
    // TODO - Need to check for errors from backend

    // Parse is for deepCopy
    let newNotes = JSON.parse(JSON.stringify(notes));
    for (let index = 0; index < newNotes.length; index++) {
      if (newNotes[index]._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  };

  // Delete a Note
  const deleteNote = async (id) => {
    const response = await fetch(`${host}/api/notes/deleteNote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNlOTNjMjAxMTI2NzJlMjgxZDAxZDU0In0sImlhdCI6MTY3NjIzMDQ2N30.awMW8W4Drr0R_7XK9C7zkx43bJz4dP1zebUFL6zcbis",
      },
    });
    await response.json();
    let newNote = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNote);
  };

  return (
    <NoteContext.Provider
      value={{ notes, getNotes, addNote, updateNote, deleteNote }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
