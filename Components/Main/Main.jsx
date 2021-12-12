import React from "react";
import Advantage from '../Advantage/Advantage.jsx'
import WhoMake from '../Who_Makes/Who_Make.jsx'
import Logotip from '../Logotip/Logotip.jsx'
import Promo from '../Promo/Promo.jsx'
import * as styles from './Main.module.css'
import Slider from "../Slider/Slider.jsx";


const Main = () => {
    return (
        <main className={styles.main}>
            <Promo />
            <Slider />
            <Advantage />
            <Logotip />
            <WhoMake />
        </main>
    )
}

export default Main