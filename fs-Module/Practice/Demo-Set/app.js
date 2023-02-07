const fs = require("fs");

const loadNotes = () => {
  const buffer = fs.readFileSync("fs-Module/Practice/Demo-Set/notes.json");
  const dataStr = buffer.toString();
  const obj = JSON.parse(dataStr);
  return obj;
};

const addNotes = (title, author) => {
  const notes = loadNotes();
  const duplicateNotes = notes.filter((data) => data.title === title);
  if (duplicateNotes.length !== 0) {
    return console.log("Title already exist!");
  } else {
    notes.push({ title: title, author: author });
  }
  saveNotes(notes);
};

const saveNotes = (notes) => {
  const dataStr = JSON.stringify(notes);
  fs.writeFileSync("fs-Module/Practice/Demo-Set/notes.json", dataStr);
};
const getAllNotes = () => {
  const data = loadNotes();
  data.forEach((note) => {
    console.log(note.title);
  });
};
const readANote = (title) => {
  const data = loadNotes();
  const requireNote = data.find((note) => note.title === title);
  if (requireNote) {
    console.log(requireNote);
  } else console.log("Title not found");
};
const removeANote = (title) => {
  const notes = loadNotes();
  const findIndex = notes.findIndex((note) => note.title === title);
  if (findIndex !== -1) {
    notes.splice(findIndex, 1);
  } else {
    console.log("No title found");
  }

  saveNotes(notes);
};
module.exports = { addNotes, getAllNotes, readANote, removeANote };
