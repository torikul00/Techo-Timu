import React from 'react';
import './Footer.css'

const Footer = () => {
    const date = new Date()
    const year = date.getFullYear()
    return (
        <div>
            <footer>
                <h2> Copyright &copy; {year} - Torikul Islam  </h2>
            </footer>
        </div>
    );
};

export default Footer;