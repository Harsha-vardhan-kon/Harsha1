import React, { useState } from "react";

const NotesManager = () => {
  const [noteList, setNoteList] = useState([]); 
  const [currentNote, setCurrentNote] = useState({ title: "", description: "" });
  const [isEditing, setIsEditing] = useState(false);
  const [currentNoteIndex, setCurrentNoteIndex] = useState(null); 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentNote({
      ...currentNote,
      [name]: value,
    });
  };

  const addNote = () => {
    if (!currentNote.title || !currentNote.description) return;

    setNoteList([
      ...noteList,
      { title: currentNote.title, description: currentNote.description, pinned: false },
    ]);
    setCurrentNote({ title: "", description: "" });
  };

  const editNote = (index) => {
    setCurrentNote(noteList[index]);
    setIsEditing(true);
    setCurrentNoteIndex(index);
  };

  const saveNote = () => {
    const updatedNoteList = [...noteList];
    updatedNoteList[currentNoteIndex] = { ...currentNote };
    setNoteList(updatedNoteList);
    setIsEditing(false);
    setCurrentNote({ title: "", description: "" });
  };

  const deleteNote = (index) => {
    const updatedNoteList = noteList.filter((note, i) => i !== index);
    setNoteList(updatedNoteList);
  };

  const togglePin = (index) => {
    const updatedNoteList = [...noteList];
    updatedNoteList[index].pinned = !updatedNoteList[index].pinned;
    setNoteList(updatedNoteList);
  };

  return (
    <div style={{ padding: "20px" }}>
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={currentNote.title}
          onChange={handleInputChange}
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        />
        <textarea
          name="description"
          placeholder="Description"
          value={currentNote.description}
          onChange={handleInputChange}
          style={{ width: "100%", padding: "10px", marginBottom: "10px", minHeight: "100px" }}
        />
        <button
          onClick={isEditing ? saveNote : addNote}
          style={{
            padding: "10px 20px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          {isEditing ? "Save" : "Add Note"}
        </button>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {noteList.map((note, index) => (
          <div
            key={index}
            style={{
              width: "calc(33.33% - 20px)",
              maxWidth: "calc(33.33% - 20px)",
              marginBottom: "20px",
              boxSizing: "border-box",
            }}
          >
            <div
              style={{
                border: "1px solid #ccc",
                padding: "15px",
                borderRadius: "5px",
                backgroundColor: "#f9f9f9",
              }}
            >
              <h3>{note.title}</h3>
              <p>{note.description}</p>
              <div>
                <button
                  onClick={() => togglePin(index)}
                  style={{
                    backgroundColor: note.pinned ? "#FF9800" : "#ddd",
                    border: "none",
                    padding: "5px 10px",
                    cursor: "pointer",
                    marginRight: "10px",
                  }}
                >
                  {note.pinned ? "Unpin" : "Pin"}
                </button>
                <button
                  onClick={() => editNote(index)}
                  style={{
                    backgroundColor: "#2196F3",
                    border: "none",
                    padding: "5px 10px",
                    cursor: "pointer",
                    marginRight: "10px",
                  }}
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteNote(index)}
                  style={{
                    backgroundColor: "#F44336",
                    border: "none",
                    padding: "5px 10px",
                    cursor: "pointer",
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotesManager;
