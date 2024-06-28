import React from 'react'
import styles from "./Home.module.css"

export const Home = () => {
  return (
    <section className={styles.container} id="home">
        <div>
            <h1 className={styles.title}>
                Hey, I'm Siddharth
            </h1>
        </div>
        <img src="assets/wavinghand.png" alt = "Waving hand image" className={styles.wavingHandImg} />
    </section>
  )
}
