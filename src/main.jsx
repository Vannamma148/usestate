import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import Data from './component/Data.jsx'
import { BrowserRouter } from 'react-router-dom'
// import ColorPicker from './component/ColorPicker.jsx'
import Nav from './component/Nav.jsx'
import Footer from './component/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

   
    {/* <ColorPicker/> */}
    <BrowserRouter>
      <Nav />
      <Footer/>
    </BrowserRouter>
  </StrictMode>,
)
