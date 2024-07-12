import Nav from './component/Nav'
import './index.css'
import Artist from './component/Artist'
import Profile from './component/Profile'
// import Name from './component/Name'
import Library from './component/Library'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Artist />} />
        <Route path="/profile/:id" element={<Profile />} />
        {/* <Route path="/profile/:id/name" element={<Name />} /> */}
        <Route path="/profile/:id/library" element={<Library />} />
      </Routes>
    </>
  )
}

export default App

