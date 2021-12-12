import React, {useRef} from 'react'
import * as styles from "./Slider.module.css"
import Data from '../../Data.js'

const Slider = () => {

   const products = Data()

   const listRef = useRef();

   const itemRef = useRef();

   let number = 0;

   let width = null;

    const right = () => {
        let widthItem = itemRef.current.offsetWidth;
        let marginItem = window.getComputedStyle(itemRef.current).getPropertyValue('margin-right').slice(0, -2);
        width = widthItem + +marginItem;
        
        number++
        
        if(number >= 13) {
            number = 0
        }
                    
        slider_roll() 
    }

    const left = () => {

        let widthItem = itemRef.current.offsetWidth;
        let marginItem = window.getComputedStyle(itemRef.current).getPropertyValue('margin-right').slice(0, -2);
        width = widthItem + +marginItem;
    
        if(number == 0) {
            number = 13
        }
        
        number--
                    
        slider_roll() 
    }

    function slider_roll() {
        listRef.current.style.left = -(number * width)+'px' 
    }      

    return (
        <div className={styles.slider}>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <div className={styles.sliderRoute}>
                        <ul ref={listRef} className={styles.list}>
                        {products.map((item, index) => (
                            <li ref={itemRef} className={styles.item_list} key={index}>
                                <img className={styles.img} src={item.image} alt="#" />
                            </li>
                        ))}
                        </ul>
                    </div>
                    <span onClick={left} className={styles.left}></span>
                    <span onClick={right} className={styles.right}></span>
                </div>
            </div>   
        </div>    
    )
}

export default Slider