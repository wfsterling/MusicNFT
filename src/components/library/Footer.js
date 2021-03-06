import React, { Component } from 'react';
import { Link } from "react-router-dom";
import logo from '../../images/logo-white.png'

class Footer extends Component {
    render() {
        return (
            <div className="footer">

                <div className="footer-logo-player"><Link to="/tokenForm"><img src={logo} alt="Melomaniac logo" /></Link></div>

            </div>
        );
    }
}

export default Footer;




