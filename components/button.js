import React from 'react';

import styles from './Button.module.css'

function Button({children}) {
    return <button type="button" className={styles.button}>Merhaba</button>
}

export default Button;