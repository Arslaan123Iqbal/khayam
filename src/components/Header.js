import React from "react";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: "easeInOut",
        duration: 1,
        delay: 0.6,
      }}
      className='header'>
      <div className='header-inner'>
        <div className='logo'><img src="./images/logo.png"  height="100px"/></div>
        <nav className='nav'>
          <li>
            <a href='/home'>Home</a>
          </li>
          <li>
            <a href='/deal'>Deals</a>
          </li>
          <li>
            <a href='/order'>Order Now</a>
          </li>
          <li>
            <a href='/about'>About</a>
          </li>
          <li>
            <a href='/why'>Why khayam is better?</a>
          </li>
        </nav>
  
        <div className='hamburger-menu'>
          <span></span>
          <span></span>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
