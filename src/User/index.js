

import { Link} from 'react-router-dom'
import "./user.css"

const UserHome = () => {


  return (
    <div className="home-container">
      <div className="circle"></div>
      USER HOME

      <h1> *INSERT APP NAME HERE* </h1>
      <p> Insert description about the app: Community connect is an app that helps people connect with other members of the community to help with any thing you may need- administrative tasks, homework, tutoring, etc.</p>

      <div className="button-container">
        <div className="btn1">
        <Link to="/request">Get Started</Link>
        </div>


        <div className="btn2">
        <Link  to="/mentor">Become a Mentor</Link>
        </div>
        
      </div>

    </div>
  )
}

export default UserHome
