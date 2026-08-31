import { Routes, Route } from 'react-router';
import { HomePage } from './pages/Home/HomePage';
import { Header } from './components/Header';
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
