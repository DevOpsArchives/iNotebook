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
    // API Call
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    });
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
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
