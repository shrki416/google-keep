import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { StyledNote } from "../Styles";

function Note({ note, handleDelete, handleEdit }) {
  const { title, content } = note;

  return (
    <StyledNote>
      <h3>{title}</h3>
      <p>{content}</p>
      <button onClick={() => handleDelete(note.id)}>
        <DeleteIcon />
      </button>
      <button>
        <EditIcon onClick={() => handleEdit(note.id)} />
      </button>
    </StyledNote>
  );
}

export default Note;
