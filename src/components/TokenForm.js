import React from 'react'
import "./TokenForm.css";
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import "./App.css";

const ipfsClient = require('ipfs-http-client')




const theme = createMuiTheme({
  palette: {
    type: 'dark',
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
      new_artist: '',
      added_file_hash: null,
      added_sample_hash: null,
      added_master_hash: null
    }

    // bind methods
    this.captureHero = this.captureHero.bind(this)
    this.heroToIpfs = this.heroToIpfs.bind(this)
    this.captureSample = this.captureSample.bind(this)
    this.sampleToIpfs = this.sampleToIpfs.bind(this)
    this.captureMaster = this.captureMaster.bind(this)
    this.masterToIpfs = this.masterToIpfs.bind(this)
    // this.handleSubmit = this.handleSubmit.bind(this)
    this.connect = this.connect.bind(this)
    this.multiaddr = React.createRef()
    
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  // Hero Image
  captureHero (event) {
    event.stopPropagation()
    event.preventDefault()
    this.heroToIpfs(event.target.files)
  }
  // Add file to IPFS and return a CID
  async heroToIpfs ([ file ]) {
    try {
      const added = await this.state.ipfs.add(file)
      this.setState({ added_file_hash: added.cid.toString() })
      console.log('Hero IPFS Hash: ', this.state.added_file_hash)
    } catch (err) {
      console.error('saving err: ',err)
    }
  }
  // Sample Image
  captureSample (event) {
    event.stopPropagation()
    event.preventDefault()
    this.sampleToIpfs(event.target.files)
  }
  // Add file to IPFS and return a CID
  async sampleToIpfs ([ file ]) {
    try {
      const added = await this.state.ipfs.add(file)
      this.setState({ added_sample_hash: added.cid.toString() })
      console.log('Sample IPFS Hash: ', this.state.added_sample_hash)
    } catch (err) {
      console.error('saving err: ',err)
    }
  }
  // Master Image
  captureMaster (event) {
    event.stopPropagation()
    event.preventDefault()
    this.masterToIpfs(event.target.files)
  }
  // Add file to IPFS and return a CID
  async masterToIpfs ([ file ]) {
    try {
      const added = await this.state.ipfs.add(file)
      this.setState({ added_master_hash: added.cid.toString() })
      console.log('Master IPFS Hash: ', this.state.added_master_hash)
    } catch (err) {
      console.error('saving err: ',err)
    }
  }
  handleSubmit (event) {
    event.preventDefault()
    console.log("Artist:",this.state.new_artist)
    console.log("Event/Title:",this.state.new_title)
    console.log("Description:",this.state.new_artist)
    console.log("Hero Image:",this.state.added_file_hash)
    console.log("Sample File:",this.state.added_sample_hash)
    console.log("Master File:",this.state.added_master_hash)
  }
  updateArtistValue(event) {
    this.setState({
      new_artist : event.target.value
    })
    console.log("artist: ", this.state.new_artist)
  }

  updateTitleValue(event) {
    this.setState({
      new_title : event.target.value
    })
    console.log("title: ", this.state.new_title)
  }
  updateDescriptionValue(event) {
    this.setState({
      new_description : event.target.value
    })
    console.log("description: ", this.state.new_description)
  }

  async connect () {
    this.setState({
      ipfs: ipfsClient(this.multiaddr.current.value)
    })
  }

  render () {
    if (this.state.ipfs) {
      return (
        <Container component="main" maxWidth="sm">
          <ThemeProvider theme={theme}>
          {/* <CssBaseline /> */}
          <div className="paper">
            
            <Typography component="h1" variant="h4" className="center-align">
              Create new collectible
            </Typography>
            <form id='capture-media' onSubmit={this.handleSubmit} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                      autoComplete="artist"
                      name="artist"
                      // value={this.state.new_artist}
                      onChange={evt => this.updateArtistValue(evt)}
                      required
                      fullWidth
                      id="artist"
                      label="Artist/Org (leave blank to use your username)"
                      autoFocus
                      variant="filled"
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField
                      name="event"
                      onChange={evt => this.updateTitleValue(evt)}
                      required
                      fullWidth
                      id="event-title"
                      label="Event/Title"
                      variant="filled"
                    />
                </Grid>
                
                <Grid item xs={12}>
                <TextField
                  id="outlined-multiline-static"
                  name='description'
                  onChange={evt => this.updateDescriptionValue(evt)}
                  label="Description"
                  multiline
                  required
                  fullWidth
                  rows={4}
                  defaultValue=""
                />
                </Grid>
                {/* <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="supply"
                    label="Supply"
                    name="supply"
                    variant="filled"
                  />
                </Grid> */}
                <Grid container justify="flex-end">
                  <Grid item className="upload-wrapper">
                    
                    <div className="upload-input-wrapper">
                      <div className="upload-input-label-wrapper">
                        <label className="input-label">Hero Image file upload</label>
                        <label className="input-sub-label">Maximum size 800x800px (JPG or PNG).</label>
                      </div>
                      <input 
                        type="file"
                        accept="image/*"
                        name='hero-upload'
                        style={{ display: 'none' }} 
                        id="hero-upload"
                        onChange={this.captureHero}
                      />
                      <label htmlFor="hero-upload" className="button-ui-wrapper"> 
                        <Button variant="contained" color="secondary" component="span">
                          Upload 
                        </Button> 
                      </label>
                    </div>
                    <div className="upload-hash-wrapper">
                      <a className="gateway-link" target='_addedFile'
                        href={'https://ipfs.io/ipfs/' + this.state.added_file_hash}>
                        {this.state.added_file_hash}
                      </a>
                    </div>

                    <div className="upload-input-wrapper">
                      <div className="upload-input-label-wrapper">
                        <label className="input-label">Sample Audio file upload</label>
                        <label className="input-sub-label">A 10 second sample of your collectible in MP3 format.</label>
                      </div>
                      <input 
                        type="file"
                        accept="image/*"
                        name='sample-upload'
                        style={{ display: 'none' }} 
                        id="sample-upload"
                        onChange={this.captureSample}
                      />
                      <label htmlFor="sample-upload" className="button-ui-wrapper"> 
                        <Button variant="contained" color="secondary" component="span">
                          Upload 
                        </Button> 
                      </label>
                    </div>
                    <div className="upload-hash-wrapper">
                      <a className="gateway-link" target='_addedFile'
                        href={'https://ipfs.io/ipfs/' + this.state.added_sample_hash}>
                        {this.state.added_sample_hash}
                      </a>
                    </div>

                    <div className="upload-input-wrapper">
                      <div className="upload-input-label-wrapper">
                      <label className="input-label">Master file upload</label>
                        <label className="input-sub-label">A high-quality version of your collectible in MP3 format.</label>
                      </div>
                      <input 
                        type="file"
                        accept="image/*"
                        name='master-upload'
                        style={{ display: 'none' }} 
                        id="master-upload"
                        onChange={this.captureMaster}
                      />
                      <label htmlFor="master-upload" className="button-ui-wrapper"> 
                        <Button variant="contained" color="secondary" component="span">
                          Upload 
                        </Button> 
                      </label>
                    </div> 
                    <div className="upload-hash-wrapper">
                      <a className="gateway-link" target='_addedFile'
                        href={'https://ipfs.io/ipfs/' + this.state.added_master_hash}>
                        {this.state.added_master_hash}
                      </a>
                    </div>
        
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
              
              {/* <Grid container justify="flex-end">
                <Grid item> 
                  <Link href="/upload" variant="body2">
                    Already have an account? Upload
                  </Link>
                </Grid>
              </Grid> */}
            </form>
          </div>
          <Box mt={5}>
            <Copyright />
          </Box>
          </ThemeProvider>
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