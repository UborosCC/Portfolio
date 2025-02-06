import { Route, Routes } from 'react-router-dom'; //importerar Route och Routes för routing
import Navbar from './assets/Navbar/Navbar'; 
import Home from './assets/Pages/Home';
import About from './assets/Pages/About';
import Contact from './assets/Pages/Contact';
import Projects from './assets/Projects/Projects';
import NameInput from './assets/Projects/React-Projects/NameInput/NameInput';
import Greeting from './assets/Projects/React-Projects/Greeting/Greeting';
import Timer from './assets/Projects/React-Projects/Timer/Timer';
import CosmicCafe from './assets/Projects/HTML-Projects/CosmicCafe';
import Color from './assets/Projects/React-Projects/Color/Color'; //importerar jsx filer
import './App.css' //importerar App.css

function App() {

  return (
    <>
    <Navbar />
    
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/nameinput' element={<NameInput />} />
        <Route path='/greeting' element={<Greeting />} />
        <Route path='/timer' element={<Timer />} />
        <Route path='/color' element={<Color />} />
        <Route path='/cosmiccafe' element={<CosmicCafe />} />
      </Routes>
    </>
  )
}

export default App
