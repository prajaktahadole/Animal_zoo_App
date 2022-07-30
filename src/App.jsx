import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Home } from './components/Home/Home'
import { About } from './components/About/About'
import { Navbar } from './components/Navbar/Navbar'
import { AnimalsList } from './components/List/AnimalList'
import { AimalsData } from './components/Single/AnimalData'
import {Ticket} from './components/Ticket/Ticket';
import {Donate} from './components/Donate/Donate'

function App() {

  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path='/animalslist' element={<AnimalsList />}></Route>
        <Route path='/animals/:id' element={<AimalsData />}></Route>
        <Route path="/donate" element={<Donate />}></Route>
        <Route path="/ticket" element={<Ticket />}></Route>
      </Routes>
    </div>
  )
}

export default App
