import './App.css'
import ContactForm from './Components/ContactForm'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'

function App() {

  return (
    <div>
      <Navbar />
      <Home />
      <div className="relative md:mt-[17%] mt-20">
        <ContactForm />
        <div className="">
          <Footer />
        </div>
      </div>

    </div>
  )
}

export default App
