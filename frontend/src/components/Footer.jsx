import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <ul className="footer__categories">
        <li> <Link to="/posts/categories/India">India</Link> </li>
        <li> <Link to="/posts/categories/World">World</Link> </li>
        <li> <Link to="/posts/categories/Education">Education</Link> </li>
        <li> <Link to="/posts/categories/Economy">Economy</Link> </li>
        <li> <Link to="/posts/categories/Technology">Technology</Link> </li> 
        <li> <Link to="/posts/categories/Weather">Weather</Link> </li>
        
        <li> <Link to="/posts/categories/Sports">Sports</Link> </li>
      </ul>
      <div className="footer__copyright">
        <small>All Rights Reserved &copy; Copyright, ASH Limited.</small>
      </div>
    </footer>
  )
}

export default Footer