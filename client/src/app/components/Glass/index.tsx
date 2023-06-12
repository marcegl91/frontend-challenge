import React from 'react'
import glass from '../../../assets/glass.png'

import styles from './Glass.module.scss'

function Glass(): JSX.Element {
  return <img className={styles.glass} src={glass} alt="glass" />
}

export default Glass
