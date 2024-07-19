import Nav from './component/Nav'
import './index.css'
import Artist from './component/Artist'
import Profile from './component/Profile'
import NationalArtists from './component/NationalArtists'
import NationalArtists2 from './component/2NationalArtists'
import NationalArtists3 from './component/3NationalArtists'
import NationalArtists4 from './component/4NationalArtists'
import NationalArtists5 from './component/5NationalArtists'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Artist />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/1" element={<NationalArtists />} />
        <Route path="/2" element={<NationalArtists2 />} />
        <Route path="/3" element={<NationalArtists3 />} />
        <Route path="/4" element={<NationalArtists4 />} />
        <Route path="/5" element={<NationalArtists5 />} />
      </Routes>
    </>
  )
}

export default App

