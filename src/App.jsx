import './App.css'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Footer from './components/Footer'
import { BrowserRouter, Route,  Routes, Router} from 'react-router-dom'
import { Productos } from './servicios/ProductosServicios'
function App() {

  return (
    <BrowserRouter >
      <Navbar />
      <Main>
        <Router>
          <Routes>
            <Route exact path={'/'} element={<Productos/>} >
            </Route>
          </Routes>
        </Router>
      </Main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
