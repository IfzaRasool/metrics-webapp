import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import DetailCountry from './components/DetailCountry';
import { About } from './components/About';
import Footer from './components/footer';
import store from './redux/configureStore';
import { fetchData } from './redux/home';

store.dispatch(fetchData);

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/DetailCountry" element={<DetailCountry />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
