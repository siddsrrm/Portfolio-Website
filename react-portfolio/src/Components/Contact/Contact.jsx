import React from 'react'
import styles from "./Contact.module.css"

export const Contact = () => {
  return (
    <footer className={styles.container} id="contact">
        <div className={styles.title}>
            <h2>Contact</h2>
        </div>
        <div className={styles.icons}>
            <a href="mailto:siddsrrm@gmail.com" target="_blank">
                <img src="assets/email-icon.png" alt="Email icon"/>
            </a>
            <a href="https://github.com/siddsrrm?tab=repositories" target="_blank">
                <img src="assets/github-icon.png" alt="Github icon"/>
            </a>
            <a href="">
                <img src="assets/linkedin-icon.png" alt="Linkedin icon" />
            </a>
        </div>
    </footer>
  )
}
