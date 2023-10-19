import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Skills from './Pages/Skiils';
import Projects from './Pages/Projects';
import LoginComponent from './Pages/LoginComponent';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home/>
      {/* <LoginComponent /> */}
      <About />
      <Skills />
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
