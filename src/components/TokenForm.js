import React, { Component, useState } from "react";
import Header from "./Header";
import "./App.css";
import "./TokenForm.css";
import Web3 from "web3";

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Melomaniac
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


export default function SignUp() {

  // TODO: create working UPLOAD JS and CSS
  // const [selectedFile, setSelectedFile] = useState();
	// const [isSelected, setIsSelected] = useState(false);

  const changeHandler = (event) => {
		// setSelectedFile(event.target.files[0]);
		// setIsSelected(true);
    console.log("Changed!")
	};

  const handleSubmission = () => {
    console.log("Handled!")
	};

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className="paper">
        
        <Typography component="h1" variant="h5">
          Create new collectible
        </Typography>
        <form className="form" noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="artist"
                name="artist"
                variant="outlined"
                required
                fullWidth
                id="artist"
                label="Artist/Org"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="title"
                label="Event/Tile"
                name="title"
                autoComplete="title"
              />
            </Grid>
            <Grid item xs={12}>
            <TextField
              id="outlined-multiline-static"
              label="Description"
              multiline
              required
              fullWidth
              rows={4}
              defaultValue=""
              variant="outlined"
            />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="supply"
                label="Supply"
                name="supply"
              />
            </Grid>
            <Divider variant="middle" className="fullDivider"/>
            <Grid item xs={12} className="submit-wrapper">
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className="submit"
              >
                Create Collectible
              </Button>


            </Grid>
          </Grid>
          
          <Grid container justify="flex-end">
            <Grid item>
              <input 
                type="file"
                accept="image/*"
                style={{ display: 'none' }} 
                id="contained-button-file"
              /> 
              {/* {isSelected ? (
                <div>
                  <p>Filename: {selectedFile.name}</p>
                  <p>Filetype: {selectedFile.type}</p>
                  <p>Size in bytes: {selectedFile.size}</p>
                  <p>
                    lastModifiedDate:{' '}
                    {selectedFile.lastModifiedDate.toLocaleDateString()}
                  </p>
                </div>
              ) : (
                <p>Select a file to show details</p>
              )} */}
              {/* <label htmlFor="contained-button-file" onChange={changeHandler}> 
                <Button variant="contained" color="primary" component="span"  onClick={handleSubmission}> 
                  Upload 
                </Button> 
              </label>  */}
              <Link href="/upload" variant="body2">
                Already have an account? Upload
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}