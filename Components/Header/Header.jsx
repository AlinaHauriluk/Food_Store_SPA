import React, {useContext} from 'react'
import * as styles from './Header.module.css'
import Nav from '../Nav/Nav'
import logo from '../images/logo.png'
import cart from '../images/cart.png'
import {NavLink} from 'react-router-dom'
import { Context } from '../../Context'

const Header = () => {

    const [products, setBuy, buy] = useContext(Context)

    let data = JSON.parse(localStorage.getItem('buy'));



    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <img src={logo} alt="logo" />

                <Nav />

                <NavLink exact to="/cart">
                    <span className={styles.cart}>
                        <img src={cart} alt="cart" />
                        {buy.length === 0 ? <span className={styles.count}>0</span> : <span className={styles.count}>{buy.length}</span>}
                    </span>
                </NavLink>
            </div>
        </header>
    )
}

export default Header