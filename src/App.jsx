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
import ScrollToTop from './Components/ScrollToTop'; // Import ScrollToTop

function App() {

  return (
    <BrowserRouter>
      <ScrollToTop /> {/* Ensures the page scrolls to the top on route change */}
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/details/:id" element={<PeopleDetails />} />
          <Route path="/board-committees" element={<BoardCommittees />} />
          <Route path="/terms-of-reference/:committeeKey" element={<TermsOfRef />} />
        </Routes>
        <div className="md:hidden my-10%">
          <ContactForm />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App;
