import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Note from './components/Note';
import notes from './notes';

function App() {
  return (
    <>
      <Header />
      {
        notes.map(item => <Note key={item.id} title={item.title} content={item.content} />)
      }
      <Footer />
    </>
  );
}

export default App;
