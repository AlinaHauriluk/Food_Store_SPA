import React from 'react'
import * as styles from "./Who_Make.module.css"

const WhoMake = () => {
    return (
        <section className={styles.whoMake}>
            <div className={styles.container}>
                <div className='left'>
                    <h3 className={styles.title}>Who Makes <span className={styles.titleColor}>Your Food?</span></h3>
                    <p className={styles.text}>Our mission is to help grow the local food ecosystem in BC and across Canada. Why?</p>
                    <ul className={styles.list}>
                        <li className={styles.item}>
                            <span className={styles.listStyle}></span>
                            <p className={styles.textItem}>Because it connects us to the land we live on, and to the people who live here.</p>
                        </li>
                        <li className={styles.item}>
                            <span className={styles.listStyle}></span>
                            <p className={styles.textItem}>Because it’s more meaningful to cook and eat something made by a person nearby than by some distant corporation</p>
                        </li>
                        <li className={styles.item}>
                            <span className={styles.listStyle}></span>
                            <p className={styles.textItem}>Because good local food makes our corner of the world a better place to live</p>
                        </li>
                        <li className={styles.item}>
                            <span className={styles.listStyle}></span>
                            <p className={styles.textItem}>Because it supports local jobs</p>
                        </li>
                        <li className={styles.item}>
                            <span className={styles.listStyle}></span>
                            <p className={styles.textItem}>Because it makes more sense for the environment</p>
                        </li>
                    </ul>
                </div>
                <div className={styles.right}></div>
            </div>
        </section>
    )
}

export default WhoMake 