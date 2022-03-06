import "./taskstyles.css";
import Submission from "./Submission.js";
import { useRef, useState } from "react";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const TaskRequest = () => {
  const [open, setOpen] = useState(true);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    height: "80%",
    width: 500,
    bgcolor: "white",
    boxShadow: 24,
    p: 2,
    justifyContent: "center",
    flexDirection: "column",
    overflow: "scroll",
  };





  return (
    <div className="task-container">
      
      <div className="rectangle" style={{fontSize: "100px"}}>
        Welcome to CommunityConnect
      </div>

      

      <div className="task-request">
        <Fade in={open}>
        <Box sx={style}>
          {/* register text fields */}
          <Typography component="h1" variant="h7">
          Task request
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="fullName"
              label="Please enter a screen name"
              name="fullName"
              placeholder="Enter a screen name"
              autoFocus
            />
            <TextField
              margin="normal"
              multiline={true}
              rows={10}
              fullWidth
              name="Description"
              label="Please describe the task that you need help with"
              placeholder="Task Description"
              required
              id="username"
              autoFocus
            />

            <Box sx={{ textAlign: "center" }}>
              <Typography component="div" variant="body1">
              If you want, select the race/ethnicity of the mentor you would like to receive assistance from:
              </Typography>
      
              <FormControlLabel
                control={<Checkbox value="eth-east-asian" color="primary" />}
                label="East-Asian"
              />
              <FormControlLabel
                control={<Checkbox value="eth-south-asian" color="primary" />}
                label="South Asian"
              />
              <FormControlLabel
                control={<Checkbox value="eth-african" color="primary" />}
                label="Black/African"
              />
              <FormControlLabel
                control={<Checkbox value="eth-hispanic" color="primary" />}
                label="Hispanic"
              />
              <FormControlLabel
                control={<Checkbox value="eth-arab" color="primary" />}
                label="Arab"
              />
              <FormControlLabel
                control={<Checkbox value="eth-white" color="primary" />}
                label="White/Caucasian"
              />
              <br/>
              <FormControlLabel
                control={<Checkbox value="eth-other" color="primary" />}
                label="Other:"
              />
              <TextField
                margin="normal"
                width="100%"
                id="otherLanguage"
                label="Other"
                name="otherLanguage"
                autoFocus
              />
            </Box>

            {/* common Languages with other */}
            <Box sx={{ textAlign: "center" }}>
              <Typography component="div" variant="body1">
              Select all languages you would like to receive assistance in:
              </Typography>
              <FormControlLabel
                control={<Checkbox value="english" color="primary" />}
                label="English"
              />
              <FormControlLabel
                control={<Checkbox value="french" color="primary" />}
                label="French"
              />
              <FormControlLabel
                control={<Checkbox value="asl" color="primary" />}
                label="American Signed Language"
              />
              <br/>
              <FormControlLabel
                control={<Checkbox value="other" color="primary" />}
                label="Other"
              />
              <TextField
                margin="normal"
                width="100%"
                id="otherLanguage"
                label="Other"
                name="otherLanguage"
                autoFocus
              />
            </Box>
            
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              SUBMIT
            </Button>

          </Box>
        </Box>
      </Fade>

        


      </div>

      {/* when submit is pressed then render this component: 
      
      <Submission /> */}


    </div>
  )
}

export default TaskRequest