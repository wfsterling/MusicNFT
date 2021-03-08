import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Header.css'
import purpleLogo from '../images/logo-purple.png'
import Menu from '@material-ui/icons/Menu';




class Header extends Component {

    constructor(){
        super();
    
        // bind methods
        this.handleMenuClick = this.handleMenuClick.bind(this)
    }

    handleMenuClick(event) {
        // Show Mobile Menu
        console.log('Mobile Menu clicked');
    }

    render() {
        return (
            <nav className="navbar-ui">
                {/* <Link to="/" className="header-"><img src={logo} className="App-logo" alt="Mellow Maniac logo" /></Link> */}
                <div className="mobileNav">
                    <Menu color="primary" fontSize="large" onClick={this.handleMenuClick}/>
                </div>

                <div className="header-logo-player"><Link to="/"><img src={purpleLogo} alt="Melomaniac logo" /></Link></div>

                <ul className="header-rt-container">
                    {/* <li>Account: {this.props.account}</li> */}
                </ul>
            </nav>
        );
    }
}

export default Header;




