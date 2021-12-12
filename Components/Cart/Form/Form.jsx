import React, { useRef } from 'react'
import * as styles from './Form.module.css'

const Form = () => {

    const ElRef = useRef()
    
    const show = (event) => {
        let form = event.target.nextElementSibling;
        form.style.display = 'block';
    }

    const close = () => {
        ElRef.current.style.display = 'none';
    }

    return (
        <div className={styles.form}>
            <button onClick={show} className={styles.btnForm}>Fill in the form</button>
            <div ref={ElRef} className={styles.container}>
                <div className={styles.formSend}>
                <form method='GET'>
                    <div className={styles.wrapper}>
                    <input name='name' className={styles.wrapperInput} type='text' placeholder='Your name' required />
                    <input  name='email' className={styles.wrapperInput} type='email' placeholder='Your email' required />
                    <input name='tel' className={styles.wrapperInput} type='phone' placeholder='Your phone' required />
                    <input name='address' className={styles.wrapperInput} type='text' placeholder='Your address' required />
                    <button className={styles.wrapperBtn}>Send</button>
                    <button onClick={close} className={styles.close}>&#10007;</button>
                    </div>
                </form>
                </div>
            </div>
        </div>
    )

}

export default Form