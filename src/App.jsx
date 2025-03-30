import './App.css'
import { Navbar } from './components/Navbar/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home';
import About from './pages/About/About';
import BookForm from './pages/BookForm/BookForm';
import BookList from './pages/BookList/BookList';
import BookView from './pages/BookView/BookView';

function App() {
  return (
    <Router>
      <Navbar /> { }

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/book-view/:id" element={<BookView />} />
        <Route path="/book-form" element={<BookForm />} />
        <Route path="/book-form/:id" element={<BookForm />} />
        <Route path="/books" element={<BookList />} />
      </Routes>
    </Router>
  );
}

export default App;
