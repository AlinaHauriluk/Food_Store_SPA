import React, {useContext} from 'react'
import * as styles from './Product.module.css'
import { Context } from '../../Context'

const Products = () => {

    const [products, setBuy, buy] = useContext(Context)

    let elementBuy = buy;

    const toBuy = (event, id) => {

        let item = event.target.closest('li');

        if(!item) return;
       
        let name = item.querySelector('h3').outerText;

        if(JSON.parse(localStorage.getItem('buy'))){
            let storage = JSON.parse(localStorage.getItem('buy'));

            let arr = []
    
            storage.map(item => {
               arr.push(item.id);
               return arr
            })
    
            products.map((element, index) => {
                if(element.name === name && arr.includes(id) === false) { 
                    elementBuy.push(element);   
                }
                return elementBuy
            })
        } else {
            products.map((element, index) => {
                if(element.name === name) { 
                    elementBuy.push(element);   
                }
                return elementBuy
            })
        }

       setBuy([...elementBuy])

       localStorage.setItem('buy', JSON.stringify(buy));

       item.style.borderColor = 'tomato';

       event.target.innerHTML = '&#10004;';
       
       event.target.style.backgroundColor = '#FF8126'
    }

    return (
        <section className={styles.product}>
            <div className={styles.container}>
            {(!products)? <h3 className={styles.titleProducts}>Loading...</h3>:(
            <React.Fragment>
                <ul className={styles.list}>
                    {products.map((item, index) => (
                        <li key={index} className={styles.item}>
                            <img className={styles.img} src={item.image} alt='#' />
                            <div className={styles.wrapper}>
                                <h3 className={styles.title}>{item.name}</h3>
                                <span className={styles.price}>{item.price}$</span>
                                <span onClick={event=>{toBuy(event, item.id)}} className={styles.buy}>BUY</span>
                            </div>
                        </li>
                    ))} 
                </ul>
            </React.Fragment> 
            )}
            </div>    
        </section> 
    )    
}

export default Products