import React, { Component } from 'react';
import './Header.css'

class Header extends Component {
    render() {
        return (
            <nav className="navbar-ui">
                <a
                    className="navbar-brand col-sm-3 col-md-2 mr-0"
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    NFT MusicStreams
                </a>
                <ul>
                    <li>Account: {this.props.account}</li>
                </ul>
            </nav>
        );
    }
}

export default Header;




