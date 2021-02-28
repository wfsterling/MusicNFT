import React from 'react'
import "./App.css";
import "./TokenForm.css";
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';


const ipfsClient = require('ipfs-http-client')







function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://melomaniac.io/">
        Melomaniac
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


class TokenForm extends React.Component {
  constructor () {
    super()
    this.state = {
      added_file_hash: null
    }

    // bind methods
    this.captureFile = this.captureFile.bind(this)
    this.saveToIpfs = this.saveToIpfs.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.connect = this.connect.bind(this)
    this.multiaddr = React.createRef()
  }

  captureFile (event) {
    event.stopPropagation()
    event.preventDefault()
    this.saveToIpfs(event.target.files)
  }


  // Add file to IPFS and return a CID
  async saveToIpfs ([ file ]) {
    try {
      const added = await this.state.ipfs.add(file)
      this.setState({ added_file_hash: added.cid.toString() })
      console.log('IPFS Hash: ', this.state.added_file_hash)
    } catch (err) {
      console.error('saving err: ',err)
    }
  }

  handleSubmit (event) {
    event.preventDefault()
  }
  changeHandler (event){
    this.captureFile(event)
  }

  async connect () {
    this.setState({
      ipfs: ipfsClient(this.multiaddr.current.value)
    })
  }

  render () {
    if (this.state.ipfs) {
      return (
        <Container component="main" maxWidth="xs">
          {/* <CssBaseline /> */}
          <div className="paper">
            
            <Typography component="h1" variant="h5">
              Create new collectible
            </Typography>
            <form id='capture-media' onSubmit={this.handleSubmit} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  {/* <ThemeProvider theme={matUI}> */}
                    <TextField
                      autoComplete="artist"
                      name="artist"
                      variant="outlined"
                      required
                      fullWidth
                      id="artist"
                      label="Artist/Org"
                      autoFocus
                      color="primary"
                    />
                  {/* </ThemeProvider> */}
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
                <Grid container justify="flex-end">
                  <Grid item className="upload-wrapper">
                    
                    <div className="upload-input-wrapper">
                      <div className="upload-input-label-wrapper">
                        <label class="input-label">Sample file upload</label>
                        <label className="input-sub-label">A 10 second sample of your collectible in MP3 format.</label>
                      </div>
                      <input 
                        type="file"
                        accept="image/*"
                        name='hero-upload'
                        style={{ display: 'none' }} 
                        id="hero-upload"
                        onChange={this.captureFile}
                      />
                      {/* <label htmlFor="hero-upload" onChange={changeHandler}>  */}
                      <label htmlFor="hero-upload" className="button-ui-wrapper"> 
                        <Button variant="contained" color="primary" component="span">
                        {/* <Button variant="contained" color="primary" component="span" onClick={this.handleSubmit}>  */}
                          Upload 
                        </Button> 
                      </label>
                    </div>
                    <div className="upload-hash-wrapper">
                      <a id="gateway-link" target='_addedFile'
                        href={'https://ipfs.io/ipfs/' + this.state.added_file_hash}>
                        {this.state.added_file_hash}
                      </a>
                    </div>
                    {/* 
                    <label htmlFor="contained-button-file" onChange={changeHandler}> 
                      <Button variant="contained" color="primary" component="span"  onClick={handleSubmission}> 
                        Upload 
                      </Button> 
                    </label>  */}
        
                  </Grid>
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
    } else {
      return (
        <div style={{ textAlign: 'center' }}>
          <h1>Enter the multiaddr for an IPFS node HTTP API</h1>
          <form>
            <input id="connect-input" type="text" defaultValue="/ip4/127.0.0.1/tcp/5001" ref={this.multiaddr} />
            <input id="connect-submit" type="button" value="Connect" onClick={this.connect} />
          </form>
        </div>
      )
    }
    
  }
}

export default TokenForm