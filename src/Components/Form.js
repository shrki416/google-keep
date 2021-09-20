import React from "react";

export default function Form() {
  return (
    <form>
      <input type="text" placeholder="title" name="tile" value="" />
      <textarea name="content" value="" rows="10"></textarea>
    </form>
  );
}
