import React from 'react'
import * as styles from "./Footer.module.css"
import logo from '../images/logo_footer.png'
import { NavLink } from 'react-router-dom'

const Footer = () => {

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <img src={logo} alt="#" />
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <NavLink className={styles.link} exact to='/'>Home</NavLink>
                    </li>
                    <li className={styles.item}>
                        <NavLink className={styles.link} exact to='/products'>
                            All Products
                        </NavLink>
                    </li>
                    <li>
                        
                    </li>
                </ul>
            </div>
        </footer>    
    )
}

export default Footer