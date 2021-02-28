import React from 'react';
import {
  fade,
  ThemeProvider,
  withStyles,
  makeStyles,
  createMuiTheme,
} from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import { purple } from '@material-ui/core/colors';

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'purple',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'purple',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'purple',
      },
      '&:hover fieldset': {
        borderColor: 'blue',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'purple',
      },
    },
  },
  input: {
    color: 'white'
  }
})(TextField);

const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 16,
    width: 'auto',
    padding: '10px 12px',
    color: theme.palette.common.white,
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}))(InputBase);

// const useStylesReddit = makeStyles((theme) => ({
//   root: {
//     border: '1px solid #e2e2e1',
//     overflow: 'hidden',
//     borderRadius: 4,
//     backgroundColor: '#fcfcfb',
//     transition: theme.transitions.create(['border-color', 'box-shadow']),
//     '&:hover': {
//       backgroundColor: '#fff',
//     },
//     '&$focused': {
//       backgroundColor: '#fff',
//       boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
//       borderColor: theme.palette.primary.main,
//     },
//   },
//   focused: {},
// }));


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

// const ValidationTextField = withStyles({
//   root: {
//     '& input:valid + fieldset': {
//       borderColor: 'purple',
//       borderWidth: 2,
//     },
//     '& input:invalid + fieldset': {
//       borderColor: 'red',
//       borderWidth: 2,
//     },
//     '& input:valid:focus + fieldset': {
//       borderLeftWidth: 6,
//       padding: '4px !important', // override inline-style
//     },
//   },
// })(TextField);

const theme = createMuiTheme({
  palette: {
    primary: purple,
  },
});

export default function CustomizedInputs() {
  const classes = useStyles();

  return null
  // (
    // <form className={classes.root} noValidate>
    //   <CssTextField 
    //     className={classes.margin}  
    //     id="custom-css-standard-input" 
    //     label="Custom CSS" 
    //   />
    //   <CssTextField
    //     className={classes.margin}
    //     label="Custom CSS"
    //     variant="outlined"
    //     id="custom-css-outlined-input"
    //   />
    //   <ThemeProvider theme={theme}>
    //     <TextField
    //       className={classes.margin}
    //       label="ThemeProvider"
    //       id="mui-theme-provider-standard-input"
    //     />
    //     <TextField
    //       className={classes.margin}
    //       label="ThemeProvider"
    //       variant="outlined"
    //       id="mui-theme-provider-outlined-input"
    //     />
    //   </ThemeProvider>
    //   <FormControl className={classes.margin}>
    //     <InputLabel shrink htmlFor="bootstrap-input">
    //       Bootstrap
    //     </InputLabel>
    //     <BootstrapInput defaultValue="react-bootstrap" id="bootstrap-input" />
    //   </FormControl>
      
    //   <InputBase
    //     className={classes.margin}
    //     defaultValue="Naked input"
    //     inputProps={{ 'aria-label': 'naked' }}
    //   />
    // </form>
  // );
}