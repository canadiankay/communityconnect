
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Home/index'
import Mentor from './MentorDashboard/index'

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="mentor" element={<Mentor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
