import React, { useState } from "react";
import { StyledForm } from "../Styles";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";
import Note from "./Note";

export default function Form() {
  const [notes, setNotes] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const { title, content } = note;

  const change = (e) => {
    const { name, value } = e.target;
    setNote({ ...note, [name]: value });
  };

  const submit = (e) => {
    e.preventDefault();
    const newNote = { ...note, id: Date.now() };
    setNotes([...notes, newNote]);
    clearNote();
  };

  const clearNote = () => {
    setNote({
      title: "",
      content: "",
    });
  };

  const handleDelete = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <>
      <StyledForm>
        {isExpanded && (
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => change(e)}
            placeholder="title"
          />
        )}

        <textarea
          name="content"
          rows={isExpanded ? 5 : 1}
          value={content}
          onChange={(e) => change(e)}
          onClick={() => setIsExpanded(true)}
          placeholder="Keep a note"
        />

        <Zoom in={isExpanded}>
          <Fab>
            <AddCircleIcon onClick={submit} fontSize="large" />
          </Fab>
        </Zoom>
      </StyledForm>
      {notes.map((note, index) => (
        <Note key={index} note={note} handleDelete={handleDelete} />
      ))}
    </>
  );
}
