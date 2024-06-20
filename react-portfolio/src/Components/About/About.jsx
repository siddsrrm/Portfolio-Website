import React from 'react'
import styles from "./About.module.css"

export const About = () => {
  return (
    <section className={styles.container}>
        <h2 className={styles.title}>
            About me
        </h2>
        <div className={styles.content}>
            <p>
                I'm currently a student at Purdue Univeristy studying computer science. I am passionate about learning new technologies and skills to create innovative projects. 
                Besides programming, I love to study history in my free time and am also a big sports enthusiast, with my favorites being basketball and football.
                Feel free to reach out!
            </p>
        </div>
    </section>
  )
}
