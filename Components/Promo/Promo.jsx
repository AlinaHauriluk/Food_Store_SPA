import React, {useRef} from 'react'
import * as styles from "./Promo.module.css"
import image from '../images/product_4.jpg'

const Promo = () => {
    const componentref = useRef()

    const show = () => {
        componentref.current.style.display = 'block';
    }

    const close = () => {
        componentref.current.style.display = 'none';
    }

    return (
        <section className={styles.promo}>
            <div className={styles.container}>
                <h2 className={styles.title1}>Welcome to our</h2>
                <h3 className={styles.title2}>Food store</h3>
                <button onClick={show} className={styles.about} href="#">Day's Product</button>
            </div>
            <div ref={componentref} className={styles.product}>
                <img className={styles.image} src={image} alt="#" />
                <h3 className={styles.title_image}>Pancakes</h3>
                <button onClick={close} className={styles.close}>x</button>
            </div>
        </section>
    )
}

export default Promo 