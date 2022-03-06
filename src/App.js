import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserHome from "./User/index";
import TaskRequest from "./User/UserRequest";
import MentorHome from "./Mentor/index";
import Dashboard from "./Mentor/Dashboard/index";
import AcceptRequest from "./Mentor/Dashboard/AcceptRequest";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserHome />} />
        <Route path="/request" element={<TaskRequest />} />
        <Route path="mentor" element={<MentorHome />} />
        <Route path="mentor/dashboard" element={<Dashboard />} />
        <Route path="mentor/dasboard/:id" element={<AcceptRequest />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
