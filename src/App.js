
import './App.css';
import Home from './Home/index.js'
import LoginButton from './Home/LoginButton';
import Mentor from './MentorDashboard/index'

function App() {
  return (
    <div className="App">
      This is home page
      <Home />


      This is the mentor dashboard
      <Mentor />
      <LoginButton />

    </div>
  );
}

export default App;
