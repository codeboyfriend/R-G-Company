import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Box from "./components/Box";
import Entries from './pages/Entries';

function App() {
  return (
    <Router>
      <div className="bg-[#f4f4f4] flex h-[100vh] w-[100vw] align-center justify-center m-auto">
        <Routes>
          <Route path='/' element={<Box />} />
          <Route path='/form' element={<Entries />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
