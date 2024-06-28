import React from 'react'
import styles from "./Navbar.module.css"

export const Navbar = () => {
  return (
    <nav className={styles.navbar}> 
        <ul className={styles.navItems}>
            <li>
                <a href="#home">Home</a>
            </li>
            <li>
                <a href="#about">About</a>
            </li>
            <li>
                <a href="#experience">Experience</a>
            </li>
            <li>
                <a href="#contact">Contact</a>
            </li> 
        </ul>            
    </nav>
  )
}
