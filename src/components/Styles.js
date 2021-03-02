import React, { Component } from 'react';
import './App.css'
import './Styles.css'
import {
  fade,
  ThemeProvider,
  withStyles,
  makeStyles,
  createMuiTheme,
} from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import { purple, blue } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#8F00FF',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      // light: will be calculated from palette.secondary.main,
      main: '#445DFF',
      // dark: will be calculated from palette.secondary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
  },
});

class Styles extends Component {
  constructor(){
    super();
    
    // this.state = {
    //   account: '',
    //   contract: null,
    //   totalSupply: 0,
    //   data: []
    // }
  }
  

  render() {
    
    return (
      <ThemeProvider theme={theme}>
      <div> 
        <h1>Material Theming</h1>
        
        <h2>Colors</h2>

        <section className="cards-wrapper">
          <div className="color-swatch-container">
            <div className="color-swatch color-primary" />
            <p>Primary</p>
            <p>#8F00FF</p>
          </div>
          <div className="color-swatch-container">
            <div className="color-swatch color-secondary" />
            <p>Secondary</p>
            <p>#445DFF</p>
          </div>
        </section>  
        <h2>Typography</h2>

        <h2>Form Inputs</h2>
        <h3>Buttons</h3>
        <section className="cards-wrapper">

          <div className="card button-card">
            <Button variant="contained">Default</Button>
            <p>Button Default</p>
          </div>

          <div className="card button-card">
            <Button variant="contained" color="primary">
              Primary
            </Button>
            <p>Button Default</p>
          </div>
          <div className="card button-card">
            <Button variant="contained" color="secondary">
              Secondary
            </Button>
            <p>Button Default</p>
          </div>
          
        </section>

        <h3>Textfields</h3>
        <section className="cards-wrapper">

          <div className="card input-card">
            <TextField id="standard-basic" label="Standard" placeholder="standard-basic"/>
            <p>standard-basic</p>
          </div>

          <div className="card input-card">
            <TextField id="filled-basic" variant="filled" placeholder="filled-basic" />
            <p>filled-basic</p>
          </div>

          <div className="card input-card">
            <TextField id="outlined-basic" label="Outlined" variant="outlined" placeholder="outlined-basic" />
            <p>outlined-basic</p>
          </div>

          {/* <div className="card input-card">
            <InputLabel shrink htmlFor="customInput">
              Bootstrap
            </InputLabel>
            <MatStyles defaultValue="customInput" id="customInput" />
          </div> */}
        </section>
      </div>
      </ThemeProvider>
    );
  }
}

export default Styles;
