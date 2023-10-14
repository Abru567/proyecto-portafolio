import './App.css'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Footer from './components/Footer'
import {BrowserRouter, Route} from 'react-router-dom'
function App() {
  
  return (
  <BrowserRouter >
<Navbar/>
<Main/>
<Footer/>
</BrowserRouter>
  )
}

export default App
