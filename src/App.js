// import { BrowserRouter as Router, Link } from 'react-router-dom';
// import './App.css';
// import Navbar from './Components/Navbar';
// import About from './Pages/About';
// import Contact from './Pages/Contact';
// import Home from './Pages/Home';
// import Skills from './Pages/Skiils';
// import Projects from './Pages/feat';
// // import Map from './map';
// import Footer from './Pages/footer';


// function App() {

//   return (
//     <div className="App"> 
//       <Navbar />
//       <Home/>
//       <Projects/>
//       <Contact/>
//         <About />
//         <Footer />
//     </div>
//   );
// }


import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Skills from './Pages/Skiils';
import Projects from './Pages/feat';
import Footer from './Pages/footer';
import { AuthProvider } from './Pages/AuthContext';  // Import AuthProvider from your context file

function App() {
  return (
    <AuthProvider> {/* Wrap the entire application with AuthProvider */}
      <Router>
        <div className="App"> 
          <Navbar />
          <Home />
          <Projects />
          <Contact />
          <About />
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
