import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Header.css'
import logo from '../images/logo-white.png'

class Header extends Component {
    render() {
        return (
            <nav className="navbar-ui">
                <Link to="/"><img src={logo} className="App-logo" alt="Mellow Maniac logo" /></Link>
                <a
                    className="navbar-brand col-sm-3 col-md-2 mr-0"
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                </a>
                <ul>
                    <li>Account: {this.props.account}</li>
                </ul>
            </nav>
        );
    }
}

export default Header;




