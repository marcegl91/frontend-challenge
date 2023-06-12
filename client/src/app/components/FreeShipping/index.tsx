import React from 'react'

import freeShipping from '../../../assets/free_shipping.png'

import styles from './FreeShipping.module.scss'

function FreeShipping(): JSX.Element {
  return <img className={styles.freeshipping} src={freeShipping} alt="Free shipping" />
}

export default FreeShipping
