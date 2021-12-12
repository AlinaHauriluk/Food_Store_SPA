import React from "react";
import * as styles from './Advantage.module.css'
import img1 from '../images/telescope.png'
import img2 from '../images/wholesale.png'
import img3 from '../images/support.png'
import img4 from '../images/winner.png'
import img5 from '../images/heart.png'

const Advantage = () => {
    return (
        <section className={styles.advantage}>
            <div className={styles.container}>
                <h3 className={styles.title}>Why Choose <span className={styles.titleColor}>the Premium Bakery Quality</span></h3>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <img src={img1} alt="#" />
                        <h4 className={styles.subtitle}>Discover new flavours & people</h4>
                        <p className={styles.text}>Discover new tastes, flavours, snacks and recipes to make wonderful meals. Also find out where your food comes from and who makes it.</p>
                    </li>
                    <li className={styles.item}>
                        <img src={img2} alt="#" />
                        <h4 className={styles.subtitle2}>Buy wholesale</h4>
                        <p className={styles.text}>We offer bulk formats, variety cases, and discovery boxes so you can save money on delicious foods by buying at wholesale prices.</p>
                    </li>
                    <li className={styles.item}>
                        <img src={img3} alt="#" />
                        <h4 className={styles.subtitle}>Support your community</h4>
                        <p className={styles.text}>By buying in bulk from local and Canadian producers you are helping grow our local food ecosystem, creating jobs, and supporting families and entrepreneurs in your community.</p>
                    </li>
                    <li className={styles.item}>
                        <img src={img4} alt="#" />
                        <h4 className={styles.subtitle}>Enjoy the best quality</h4>
                        <p className={styles.text}>We only offer great tasting, all natural foods that are better for you, and organic if possible.</p>
                    </li>
                    <li className={styles.item2}>
                        <img src={img5} alt="#" />
                        <h4 className={styles.subtitle}>Enjoy Club Level Service</h4>
                        <p className={styles.text}>As a member of our club, we will make sure you are delighted with our service or we will make it right!</p>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Advantage