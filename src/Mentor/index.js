// this is the mentor home page-- integrate all comoponents here

import Login from "./Login.js";
import Register from "./Register.js";
import { useState } from "react";

const MentorHome = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  return (
    <div>
      MENTOR HOME PAGE
      <button>LOGIN</button>
      <button type="button" trigger="false" onClick={handleOpen}>
        {/* REGISTER */}
        <Register />
      </button>
    </div>
  );
};

export default MentorHome;
