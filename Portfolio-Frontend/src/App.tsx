import { Routes, Route } from 'react-router';
import { HomePage } from './pages/Home/HomePage';
import { ServicesPage } from './pages/Services/ServicesPage';
import './App.css';


function App() {

  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="services" element={<ServicesPage />} />
      </Routes>
    </>
  )
}

export default App
