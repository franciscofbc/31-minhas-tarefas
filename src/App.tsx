import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import GlobalStyle from './styles'
import Navbar from './components/Contact/Navbar'
import Home from './pages/Home'

function App() {
  return (
    <div>
      <GlobalStyle />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/novo" element={<Cadastro />}></Route>
          <Route path="/*" element={<h1>Page not found</h1>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
