import React from 'react'
import styles from "./Navbar.module.css"

export const Navbar = () => {
  return (
    <nav className={styles.navbar}> 
        <ul className={styles.navItems}>
            
            <li>
                <a href="#about">About</a>
            </li>
            <li>
                <a href="#expierence">Experience</a>
            </li>
            <li>
                <a href="#contact">Contact</a>
            </li> 
        </ul>            
    </nav>
  )
}
