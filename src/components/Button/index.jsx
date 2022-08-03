import React from 'react';
import styles from './button.module.scss';

function Button({children}) {
  return (
   <button className={styles.btn}>{children}</button>
  )
}

export default Button
