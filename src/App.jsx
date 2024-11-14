import { BrowserRouter } from "react-router-dom"
import {
  About, Contact, Experience,
  // Feedbacks,
  Hero, Navbar, Tech, Works, StarsCanvas
} from './components'
function App() {

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        <About />
        <Experience />
        <Tech />
        <Works />
        {/* <Feedbacks /> */}
        </div>
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
     </div>
   </BrowserRouter>
  )
}

export default App
