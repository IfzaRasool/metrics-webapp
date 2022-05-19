import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Details from './components/Details';
import Header from './components/Header';
import DetailCountry from './components/DetailCountry';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Details" element={<Details />} />
          <Route path="/DetailCountry" element={<DetailCountry />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
