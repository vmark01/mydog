import HomePage from './Home'
import Navbar from './Navbar'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import TimelinePage from './TimelinePage'
import GalleryPage from './GalleryPage'
import Footer from './Footer'
import ContactForm from './ContactForm'

function App() {

  return (
    <Router>
      <Navbar />
      <div className="container mt-4 mb-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/timeline" element={<TimelinePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </div>
      <Footer/>
    </Router>
  )
}

export default App
