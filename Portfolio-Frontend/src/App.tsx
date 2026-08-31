import { Routes, Route } from 'react-router';
import { Header } from './components/Header';
import { HomePage } from './pages/Home/HomePage';
import './App.css';


function App() {

  return (
    <>
      <Header />

      <Routes>
        <Route index element={<HomePage />} />
      </Routes>
    </>
  )
}

export default App
