import React, { useContext, useEffect, useRef, useState } from "react";
import noteContext from "../context/notes/NoteContext";
import AddNote from "./AddNote";
import NoteItem from "./NoteItem";

const Notes = () => {
  const { notes, getNotes, updateNote } = useContext(noteContext);

  useEffect(() => {
    getNotes();
  }, []);

  const ref = useRef(null);
  const [note, setNote] = useState({
    e_title: "",
    e_description: "",
    e_tag: "",
  });

  const updateNoteModal = (currentNote) => {
    ref.current.click();
    setNote({
      e_title: currentNote.title,
      e_description: currentNote.description,
      e_tag: currentNote.tag,
    });
  };

  const handleAddNoteClick = (e) => {
    e.preventDefault(); // So that the page does not reload
    // updateNote(note.title, note.description, note.tag);
    console.log("Updating note");
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <>
      <AddNote />

      <button
        ref={ref}
        type="button"
        style={{ display: "none" }}
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      ></button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Note
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3 my-3">
                  <label htmlFor="e_title" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="e_title"
                    name="e_title"
                    value={note.e_title}
                    aria-describedby="emailHelp"
                    onChange={onChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="e_description" className="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="e_description"
                    name="e_description"
                    value={note.e_description}
                    onChange={onChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="e_tag" className="form-label">
                    Tag
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="e_tag"
                    name="e_tag"
                    value={note.e_tag}
                    onChange={onChange}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleAddNoteClick}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row my-3">
          <h2>Your Notes</h2>
          {notes.map((note) => {
            return (
              <NoteItem
                key={note._id}
                note={note}
                updateNote={updateNoteModal}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Notes;
