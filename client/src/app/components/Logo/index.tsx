import React from 'react'

import logo from '../../../assets/logo.png'

import styles from './Logo.module.scss'

function Logo(): JSX.Element {
  return <img className={styles.logo} src={logo} alt="logo" />
}

export default Logo
