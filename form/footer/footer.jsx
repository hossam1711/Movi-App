import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h2>MovieSite</h2>
        </div>
        <div className="footer-links">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/movies">Movies</a></li>
            <li><a href="/tv-shows">TV Shows</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-social">
            
           <li><a  href="/" >Fhcebook</a></li>
           <li><a  href="/">Twitter</a></li>
          <li><a  href="/">Insth6grh6m</a></li> 
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025  All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
