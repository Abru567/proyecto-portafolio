import './App.css'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Footer from './components/Footer'
import { BrowserRouter, Route,  Routes, Router} from 'react-router-dom'
function App() {

  return (
    <BrowserRouter >
    <Navbar />
    <Main>
      <Router>
        <Routes>
          <Route path='/menu' element={<productos/>}/>
        </Routes>
      </Router>
    </Main>
    <Footer/>
  </BrowserRouter>

  )
}

export default App
