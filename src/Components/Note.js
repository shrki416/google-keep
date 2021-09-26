import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { StyledNote } from "../Styles";

function Note({ note, handleDelete, handleEdit }) {
  const { title, content } = note;

  console.log(note);

  return (
    <StyledNote>
      <h3>{title}</h3>
      <p>{content}</p>
      <button onClick={() => handleDelete(note.id)}>
        <DeleteIcon />
      </button>
      <button onClick={() => handleEdit(note.id)}>
        <EditIcon />
      </button>
    </StyledNote>
  );
}

export default Note;
