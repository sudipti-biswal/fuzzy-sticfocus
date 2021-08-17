import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.scss';

function Footer({ showMenu = false }) {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    {
                        showMenu && (

                            <div className="row">
                                <div className="logo">
                                    <h3>Logo</h3>
                                </div>
                                <div className="footer-col-main">
                                    <h3>Sticfocus</h3>
                                </div>
                                <div className="footer-col">
                                    <h4>Company</h4>
                                    <ul>
                                        <li><Link to='/about'>About</Link></li>
                                        <li><Link to='/newsroom'>Newsroom</Link></li>
                                        <li><Link to='/contact'>Contact</Link></li>
                                        <li><Link to='/careers'>Careers</Link></li>
                                    </ul>
                                </div>
                                <div className="footer-col">
                                    <h4>Programs</h4>
                                    <ul>
                                        <li><Link to='/sticfocus-for-good'>Sticfocus for good</Link></li>
                                        <li><Link to='/advertise'>Advertise</Link></li>
                                        <li><Link to='/developers'>Developers</Link></li>
                                    </ul>
                                </div>
                                <div className="footer-col">
                                    <h4>Support</h4>
                                    <ul>
                                        <li><Link to='/helpControl'>Help Control</Link></li>
                                        <li><Link to='/safteyControl'>Saftey Control</Link></li>
                                        <li><Link to='/creatorportal'>Creator portal</Link></li>
                                        <li><Link to='/communityGuidelines'>Community Guidelines</Link></li>
                                        <li><Link to='/transparency'>Transparency</Link></li>
                                    </ul>
                                </div>
                                <div className="footer-col">
                                    <h4>Legal</h4>
                                    <ul>
                                        <li><Link to='/terms-of-service'>Terms of Service</Link></li>
                                        <li><Link to='/cookiesPolicy'>Cookies Policy</Link></li>
                                        <li><Link to='/propertyPolicy'>Property Policy</Link></li>
                                        <li><Link to='/lawEnforcement'>Law Enforcement</Link></li>
                                        <li><Link to='/privacyPolicy'>Privacy Policy</Link></li>
                                    </ul>
                                </div>
                            </div>
                        )
                    }

                    <div className="row-1">
                        <button>English</button>
                        <p>@2021 Sticfocus</p>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer