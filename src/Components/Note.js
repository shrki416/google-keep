import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import { StyledNote } from "../Styles";

function Note({ note, handleDelete }) {
  const { title, content } = note;

  return (
    <StyledNote>
      <h3>{title}</h3>
      <p>{content}</p>
      <button onClick={() => handleDelete(note.id)}>
        <DeleteIcon />
      </button>
    </StyledNote>
  );
}

export default Note;
