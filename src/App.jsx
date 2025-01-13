import './App.css'
import ContactForm from './Components/ContactForm'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import AboutUs from './Pages/AboutUs'
import Home from './Pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PeopleDetails from './Pages/PeopleDetails'
import BoardCommittees from './Pages/BoardCommittees'
import TermsOfRef from './Pages/TermsOfRef'

function App() {

  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/details/:id" element={<PeopleDetails />} />
          <Route path="/board-committees" element={<BoardCommittees />} />
          <Route path="/terms-of-reference/:committeeKey" element={<TermsOfRef/>} />
        </Routes>
          <div className="md:hidden">
            <ContactForm/>
          </div>
            <Footer />
        </div>
    </BrowserRouter >
  )
}

export default App
