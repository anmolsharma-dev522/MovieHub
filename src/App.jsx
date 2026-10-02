import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import Watchlist from './pages/Watchlist';
import About from './pages/About';
import Navbar from "./components/Navbar";
import Details from './pages/MovieDetails';

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/search" element={<Search />} />

        <Route path="/watchlist" element={<Watchlist />} />

        <Route path='/about' element={<About/>} />
        
        <Route path="/movie/:id" element={<Details/>} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
