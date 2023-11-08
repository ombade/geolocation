import { BrowserRouter as Router, Link } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Skills from './Pages/Skiils';
import Projects from './Pages/feat';
// import Map from './map';

function App() {
  return (
    <div className="App">
     
      <Navbar />
      <Home/>
     
      <Projects/>
      <About />
      
      
      <Contact/>
      {/* <Link to="/dash"> */}
        <button>Go to Dash</button>
        <Skills />
        <map/>
    </div>
  );
}

export default App;
