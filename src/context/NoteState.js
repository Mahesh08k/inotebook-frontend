import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "670ba3151685e6e8dfcd37d3",
      user: "6709708de3cfe6590288aa5f",
      title: "New Product Launch",
      description: "We are launching new skin care product",
      tag: "Business Schedule",
      date: "2024-10-13T10:38:13.947Z",
      __v: 0,
    },
    {
      _id: "670ba3561685e6e8dfcd37d5",
      user: "6709708de3cfe6590288aa5f",
      title: "Doctor's Appointment",
      description: "Visit Ms.patil for regular V checkup",
      tag: "Personal",
      date: "2024-10-13T10:39:18.004Z",
      __v: 0,
    },
    {
      _id: "670ba3151685e6e8dfcd37d32",
      user: "6709708de3cfe6590288aa5f",
      title: "New Product Launch",
      description: "We are launching new skin care product",
      tag: "Business Schedule",
      date: "2024-10-13T10:38:13.947Z",
      __v: 0,
    },
    {
      _id: "670ba3561685e6e8dfcd37d52",
      user: "6709708de3cfe6590288aa5f",
      title: "Doctor's Appointment",
      description: "Visit Ms.patil for regular V checkup",
      tag: "Personal",
      date: "2024-10-13T10:39:18.004Z",
      __v: 0,
    },
    {
      _id: "670ba3151685e6e8dfcd37d33",
      user: "6709708de3cfe6590288aa5f",
      title: "New Product Launch",
      description: "We are launching new skin care product",
      tag: "Business Schedule",
      date: "2024-10-13T10:38:13.947Z",
      __v: 0,
    },
    {
      _id: "670ba3561685e6e8dfcd37d53",
      user: "6709708de3cfe6590288aa5f",
      title: "Doctor's Appointment",
      description: "Visit Ms.patil for regular V checkup",
      tag: "Personal",
      date: "2024-10-13T10:39:18.004Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(notesInitial);

  /* ADD a Note */
  const addNote = (title, description, tag) => {
    console.log("adding new note");
    //TODO : API call
    const note = {
      _id: "670ba3561685e6e8dfcd37d532",
      user: "6709708de3cfe6590288aa5f",
      title: title,
      description: description,
      tag: tag,
      date: "2024-10-13T10:39:18.004Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };

  /* Delete a Note */
  const deleteNote = () => {};

  /* Edit a Note */
  const editNote = () => {};

  return (
    <NoteContext.Provider
      value={{ notes, setNotes, addNote, deleteNote, editNote }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
