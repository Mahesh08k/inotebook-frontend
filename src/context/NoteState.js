import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  let host = "http://localhost:5000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

  /*Get All Notes From DB */
  const getNote = async () => {
    //TODO : API call
    let url = `${host}/api/notes/fetchallnotes`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjcwOTcwOGRlM2NmZTY1OTAyODhhYTVmIn0sImlhdCI6MTcyODc1NDIzNH0.Q5FWdzV6tbYJNCy72olYbKTE__kE4DvUls_4gV_Rvfc",
      },
    });
    const json = await response.json();

    setNotes(json);
  };

  /* ADD a Note */
  const addNote = async (title, description, tag) => {
    //TODO : API call
    let url = `${host}/api/notes/addnote`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjcwOTcwOGRlM2NmZTY1OTAyODhhYTVmIn0sImlhdCI6MTcyODc1NDIzNH0.Q5FWdzV6tbYJNCy72olYbKTE__kE4DvUls_4gV_Rvfc",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const note = await response.json();
    setNotes(notes.concat(note));
  };

  /* Delete a Note */
  const deleteNote = async (id) => {
    //TODO : API CALL
    let url = `${host}/api/notes/deletenote/${id}`;
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjcwOTcwOGRlM2NmZTY1OTAyODhhYTVmIn0sImlhdCI6MTcyODc1NDIzNH0.Q5FWdzV6tbYJNCy72olYbKTE__kE4DvUls_4gV_Rvfc",
      },
    });
    const json = await response.json();

    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  /* Edit a Note */
  const editNote = async (id, title, description, tag) => {
    //TODO api call
    let url = `${host}/api/notes/updatenote/${id}`;
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjcwOTcwOGRlM2NmZTY1OTAyODhhYTVmIn0sImlhdCI6MTcyODc1NDIzNH0.Q5FWdzV6tbYJNCy72olYbKTE__kE4DvUls_4gV_Rvfc",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = await response.json();

    //logic to edit in client
    let newNotes = JSON.parse(JSON.stringify(notes));
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  };

  return (
    <NoteContext.Provider
      value={{ notes, setNotes, getNote, addNote, deleteNote, editNote }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
