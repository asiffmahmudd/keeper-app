import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Note from './components/Note';
import notes from './notes';
import CreateArea from './components/CreateArea';
import { useState } from 'react';

function App() {

  const [notesList, setNotesList] = useState(notes)
  const [singleNote, setSingleNote] = useState({
    title:"",
    content: ""
  })

  const addNote = (e) =>{
    console.log(notesList.length+1)
    const newNote = {
      key: notesList.length+1,
      ...singleNote
    }
    console.log(newNote)
    setNotesList([...notesList, newNote])
    setSingleNote({
      title:"",
      content:""
    })
    e.preventDefault()
  }

  const deleteNote = (id) => {
    setNotesList(notesList.filter(item=> item.key !== id))
  }

  return (
    <>
      <Header />
      <CreateArea addNote={addNote} setSingleNote={setSingleNote} singleNote={singleNote} />
      {
        notesList.map((item,index) => <Note key={item.key} id={item.key} title={item.title} content={item.content} deleteNote={deleteNote} />)
      }
      <Footer />
    </>
  );
}

export default App;
