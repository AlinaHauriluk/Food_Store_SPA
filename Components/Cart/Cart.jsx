import React, {useContext, useState, useEffect, useMemo } from 'react'
import * as styles from './Cart.module.css'
import { Context } from '../../Context'
import Form from './Form/Form.jsx'

const Cart = () => {
    
    const [products, setBuy, buy] = useContext(Context);

    let [cart, setCart] = useState([]);

    useEffect(()=> {

        let dataCart = [...cart];

        dataCart = Object.values(buy.reduce((acc, n) => ((!acc[n.id]) && (acc[n.id] = n), acc), {}));

        setCart([...dataCart]);

    }, [buy])

    let [count, setCount] = useState([])
    
    useEffect(()=> {
        let arr_data = count;

        let el_index = buy.map((el, index) => {
        return String(el.id)
        }) 
    
        cart.map((el, index) => {
    
        let arr = [];
        
        let item = String(el.id);
    
        let item_index = el_index.indexOf(item);
    
        while(item_index !== -1) {
            arr.push(item_index)
            item_index = el_index.indexOf(item, item_index + 1)   
        } 
           return arr_data.push(arr.length)
        }) 
        
        setCount([...arr_data])

    }, [cart, buy])

    const [number, setNumber] = useState();

    useEffect(()=>{
        let priceCount = number;

        priceCount = [];

        cart.map(item=>{
            return priceCount.push(+item.price.slice(0,-1))
        })

        setNumber(priceCount);

    }, [cart])

    const close = (event, index) => {
        let list = event.target.closest('li')

        if(!list) return
        
        let title = list.querySelector('h3').outerText;

        let delBuy = buy.filter((item, index) => {
           return title !== item.name 
        })

        setBuy(delBuy)
        localStorage.setItem('buy', JSON.stringify(delBuy))  

        let arrCount = count

        arrCount.map((el, i)=>{
            if(i === index){
                count.splice(i, 1) 
            }
            return count
        })

        setCount(count);
    }

    const add = (event) => {
        let list = event.target.closest('li')

        let title = list.querySelector('h3');

        let titleName = list.querySelector('h3').outerText;

        let plus = title.nextElementSibling; 
        
        let buyAdd = [...buy]

        cart.map((item, index) => {  
            if(titleName === item.name){
                buyAdd.splice(index, 0, item)
            }
            return buyAdd
        })

        setBuy([...buyAdd])
        
        localStorage.setItem('buy', JSON.stringify(buyAdd))

        count = count.slice(-cart.length);

        setCount(count);
        
        plus.innerHTML =  +plus.outerText + 1; 

        let price = list.querySelector('#price');

        let priceText = price.outerText;

        priceText = priceText.substring(0, priceText.length-1);

        let arr= [];

        cart.map(item=>{
            if(titleName === item.name){
                arr.push(item.price.slice(0, -1))
            }
            return arr
        })

        arr = arr.join('');

        price.innerHTML = (+priceText + +arr).toFixed(2);
    }

    const minus = (event) => {
        let list = event.target.closest('li')

        let title = list.querySelector('h3');

        let titleName = list.querySelector('h3').outerText;

        let minus = title.nextElementSibling;

        let buyMinus = [...buy]

        cart.map((item, index) => {  
            if(titleName === item.name){
                buyMinus.splice(index, 1)
            }
            return buyMinus
        })

        setBuy([...buyMinus])
        
        localStorage.setItem('buy', JSON.stringify(buyMinus))

        minus.innerHTML = +minus.outerText - 1;

        if(minus.outerText <= 0){
            list.style.display = 'none'
        }

        let price = list.querySelector('#price');

        let priceText = price.outerText;

        priceText = priceText.substring(0, priceText.length-1);

        let arr= [];

        cart.map(item=>{
            if(titleName === item.name){
                arr.push(item.price.slice(0, -1))
            }
            return arr
        })

        arr = arr.join('');

        price.innerHTML = (+priceText - +arr).toFixed(2);
    }

    const[price, setPrice] = useState();

    useEffect(()=>{
        let priceCount = price;

        priceCount = [];

        buy.map(item=>{
            return priceCount.push(item.price.slice(0,-1))
        })

        priceCount = priceCount.reduce((sum, current) => +sum + +current, 0).toFixed(2);

        setPrice(priceCount)

    }, [buy])

    return (
        <section className={styles.cart}>
            <div className={styles.container}>
        {(cart.length === 0)? <h3 className={styles.titleCart}>Cart is empty</h3>:(
            <React.Fragment>
                <ul className={styles.list}>
                    {cart.map((item, index) => (
                        <li className={styles.item} key={index}>
                            <img className={styles.img} src={item.image} alt="#" />
                            <div className={styles.wrapper}>
                                <h3 className={styles.title}>{item.name}</h3>
                                {count.map((item, i)=>
                                    index === i && <span key={i} className={styles.count}>{item}</span> 
                                )}
                            </div> 
                            <div className={styles.wrapperCount}>   
                                <span onClick={add} className={styles.plus}>&#43;</span>
                                <span onClick={minus} className={styles.plus}>&#8722;</span>
                            </div>
                            <div className={styles.price}>
                                {number.map((el, i)=>
                                    index === i && <span key={i} id='price' >{el}</span>
                                )} 
                                <span>$</span>
                            </div>
                            <button onClick={event=>{close(event, index)}} className={styles.close}>&#10007;</button>
                        </li>
                    ))}
                </ul>
                <div className={styles.total}>
                    <h4 className={styles.totalTitle}>Total</h4>
                    <span className={styles.totalPrice}>{price}$</span>
                </div>
                <Form />
            </React.Fragment>
        )}
            </div>  
        </section>    
    )
}

export default Cart