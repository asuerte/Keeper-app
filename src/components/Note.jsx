import React from "react";

// This Note component displays the information passed from the App.jsx 
// The id of the corresponding note is passed back to App.jsx, where the note is to be deleted
function Note(props) {
  function deleteNote() {
    props.onDelete(props.id)
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={deleteNote}>DELETE</button>
    </div>
  );
}

export default Note;
