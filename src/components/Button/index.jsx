import React from 'react';
import styles from './button.module.scss';

function Button({children, variant='black', tamanho='normal'}) {
  return (
   <button className={styles.btn}>{children}</button>
  )
}

export default Button;
