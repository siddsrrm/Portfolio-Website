import React from 'react'
import languages from "../../Data/languages.json"
import technologies from "../../Data/technologies.json"
import styles from "./Experience.module.css"

export const Experience = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <div className={styles.languages}>
                <h2 className={styles.title}>Languages</h2>
                <div className={styles.languagesContainer}>
                    {languages.map((language, id) => {
                        return (
                            <div key={id} className={styles.language}>
                                <div className={styles.languageImgContainer}>
                                    <img src={language.imageSrc} alt={language.title} className={styles.languageImg}/>
                                </div>
                                <div>
                                    <p>{language.title}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className={styles.technologies}>
                <h2 className={styles.title}>Technologies</h2>
                <div className={styles.technologiesContainer}>
                    {technologies.map((technology, id) => {
                        return (
                            <div key={id} className={styles.technology}>
                                <div className={styles.technologyImgContainer}>
                                    <img src={technology.imageSrc} alt={technology.title} className={styles.technologyImg}/>
                                </div>
                                <div>
                                    <p>{technology.title}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    </section>
  )
}
