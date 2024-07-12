import Nav from './component/Nav'
import './index.css'
import Artist from './component/Artist'
import Profile from './component/Profile'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Artist />} />
        <Route path="/profile/:id" element={<Profile />} />
      </Routes>
    </>
  )
}

export default App

