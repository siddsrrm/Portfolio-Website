import React from 'react'
import languages from "../../Data/languages.json"
import technologies from "../../Data/technologies.json"
import styles from "./Experience.module.css"

export const Experience = () => {
  return (
    <section className={styles.container}>
        <div className={styles.titles}>
            <h2>
                Languages
            </h2>
            <h2>
                Technologies
            </h2>
        </div>
        
        <div className={styles.content}>
            <div className={styles.languages}>{
                languages.map((languages, id) => {
                    return <div key={id} classname={styles.language}>
                        <div className={styles.languageImgContainer}>
                            <img src={languages.imageSrc} alt={languages.title} className={styles.languageImg}/>
                        </div>
                        <div>
                            <p>{languages.title}</p>
                        </div>
                    </div>
                })
                }</div>
            <div className={styles.technologies}>{
                technologies.map((technologies, id) => {
                    return <div key={id} className={styles.technology}>
                        <div className={styles.technologyImgContainer}>
                            <img src={technologies.imageSrc} alt={technologies.title} className={styles.technologyImg}/>
                        </div>
                        <div>
                            <p>{technologies.title}</p>
                        </div>
                    </div>
                })
                }</div>
        </div>
    </section>
  )
}
