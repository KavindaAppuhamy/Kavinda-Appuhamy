import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Portfolio from './pages/Portfolio'

function App() {

  return (
    <>
      <BrowserRouter>
        <div>  
          <Routes>
            <Route path="/*" element={<Portfolio />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
