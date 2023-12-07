import logo from './logo.svg';
// import './App.css';
import Navbar from './components/Navbar';
import "./tailwind.css";
import Hero from './components/Home';
import Bot from './components/Bot';
import Skills from './components/SkillsSection';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Bot />
      <Hero />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer />

      {/* <header className="App-header">
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
      </header> */}
    </div>
  );
}

export default App;
