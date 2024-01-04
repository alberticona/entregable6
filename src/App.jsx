import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import Playlist from './pages/Playlist'
import PlayListDetail from './pages/PlayListDetail'
import TrackDetail from './pages/TrackDetail'
import ArtistDetail from './pages/ArtistDetail'
import PlaylistPublic from './pages/PlaylistPublic'
import PrivateRoutes from './components/auth/PrivateRoutes'
import Page404 from './pages/Page404'

function App() {

  return (
    <>
      <Routes>
        {/* rutas publicas */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/playlists/public/:id" element={<PlaylistPublic />} />

        {/* rutas privadas */}
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<Home />} />
          <Route path="/playlists" element={<Playlist />} />
          <Route path="/playlists/:id" element={<PlayListDetail />} />
          <Route path="/tracks/:id" element={<TrackDetail />} />
          <Route path="/artists/:id" element={<ArtistDetail />} />
        </Route>

        <Route path="*" element={<Page404 />}/>
      </Routes>
    </>
  )
}

export default App
