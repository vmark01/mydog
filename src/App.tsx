import HomePage from './Home'
import Navbar from './Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TimelinePage from './TimelinePage'
import GalleryPage from './GalleryPage'
import Footer from './Footer'

function App() {

  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/timeline" element={<TimelinePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
        </Routes>
      </div>
      <Footer/>
    </Router>
  )
}

export default App
