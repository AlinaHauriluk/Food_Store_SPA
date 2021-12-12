import React from 'react'
import * as styles from "./Logotip.module.css"
import logo from '../images/logo2.png'

const Logotip = () => {
    return (
        <div className={styles.logotip}>
            <h3 className={styles.title}>Our Charity Partner, City Bakery</h3>
            <img src={logo} alt="#"/>
        </div>    
    )
}

export default Logotip