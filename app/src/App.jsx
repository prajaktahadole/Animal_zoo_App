
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Home } from './components/Home'
import { About } from './components/About'
import { Navbar } from './components/Navbar'
import { AnimalsList } from './components/AnimalList'
import { AimalsData } from './components/AnimalData'

function App() {

  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path='/animalslist' element={<AnimalsList />}></Route>
        <Route path='/animals/:id' element={<AimalsData />}></Route>
      </Routes>
    </div>
  )
}

export default App
