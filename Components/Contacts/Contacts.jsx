import React from 'react'
import * as styles from "./Contacts.module.css"
import telegram from '../images/telegram.png'
import instagram from '../images/instagram.png'
import twitter from '../images/twitter.png'
import w_app from '../images/w_app.png'
import facebook from '../images/facebook.png'
import {Link} from 'react-router-dom'

const Contacts = () => {
    return (
        <section className={styles.contacts}>
            <h3 className={styles.title}>Tell a Friend</h3>
            <div className={styles.wrapper}>
                <Link to="#"><img className={styles.img} src={telegram} alt='#' /></Link>
                <Link to="#"><img className={styles.img} src={instagram} alt='#' /></Link>
                <Link to="#"><img className={styles.img} src={twitter} alt='#' /></Link>
                <Link to="#"><img className={styles.img} src={w_app} alt='#' /></Link>
                <Link to="#"><img className={styles.imgFacebook} src={facebook} alt='#' /></Link>
            </div>
        </section>    
    )
}

export default Contacts