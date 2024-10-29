import './App.css'
import { HashRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Note1 from './Pages/Note1'
import Note2 from './Pages/Note2'
import Note3 from './Pages/Note3'
import Note4 from './Pages/Note4'
import Note5 from './Pages/Note5'
import Note6 from './Pages/Note6'
import Note7 from './Pages/Note7'
import Note8 from './Pages/Note8'

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/note1' element={<Note1 />} />
          <Route path='/note2' element={<Note2 />} />
          <Route path='/note3' element={<Note3 />} />
          <Route path='/note4' element={<Note4 />} />
          <Route path='/note5' element={<Note5 />} />
          <Route path='/note6' element={<Note6 />} />
          <Route path='/note7' element={<Note7 />} />
          <Route path='/note8' element={<Note8 />} />
        </Routes>
      </Router>
  )
}

export default App
