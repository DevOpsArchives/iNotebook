import React, { useContext } from "react";
import noteContext from "../context/notes/NoteContext";

const NoteItem = (props) => {
  const { deleteNote } = useContext(noteContext);
  const { note } = props;

  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description}</p>
          <i
            className="far fa-trash-alt mx-2"
            style={{ cursor: "pointer" }}
            onClick={() => {
              deleteNote(note._id);
            }}
          ></i>
          <i
            className="far fa-edit my-1 float-end"
            style={{ cursor: "pointer" }}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
