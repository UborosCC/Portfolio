import { Route, Routes } from 'react-router-dom'; //importerar Route och Routes för routing
import Navbar from './assets/Navbar/Navbar'; 
import About from './assets/About/About';
import Contact from './assets/Contact/Contact';
import Projects from './assets/Projects/Projects';
import NameInput from './assets/Projects/React-Projects/NameInput/NameInput';
import Greeting from './assets/Projects/React-Projects/Greeting/Greeting';
import Timer from './assets/Projects/React-Projects/Timer/Timer';
import Color from './assets/Projects/React-Projects/Color/Color'; //importerar jsx filer
import './App.css' //importerar App.css

function App() {

  return (
    <>
    <Navbar />
    
      <Routes>
        <Route path='/' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/nameinput' element={<NameInput />} />
        <Route path='/greeting' element={<Greeting />} />
        <Route path='/timer' element={<Timer />} />
        <Route path='/color' element={<Color />} />
      </Routes>
    </>
  )
}

export default App
