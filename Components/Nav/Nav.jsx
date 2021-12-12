import React from 'react'
import * as styles from "./Nav.module.css"
import {NavLink} from 'react-router-dom';

const Nav = () => {

    return (
        <nav className={styles.nav}>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <NavLink className={styles.link} exact to='/'>Home</NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink className={styles.link} exact to="/products">All Products</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Nav