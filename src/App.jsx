import Nav from './component/Nav'
import './index.css'
import Artist from './component/Artist'
import Photo from './component/photo'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Artist />} />
        <Route path="/2" element={<Photo />} />
      </Routes>
    </>
  )
}

export default App
