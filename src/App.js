import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import NotFound from './components/NotFound';

function App() {
  return (
    <div id='App'>
      
      {/* Header and NavBar */}
      <NavBar />

      {/* Main Body for Content to render */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/Portfolio" element={<Portfolio />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>

      {/* Footer */}
      <footer>This is my Footer!</footer>

      {/* <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div> */}
    </div>
  );
}

export default App;
