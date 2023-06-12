import React from 'react'
import styles from './Home.module.scss'
import NavBar from '../../components/NavBar'

export function Home(): JSX.Element {
  return (
    <>
      <NavBar />
      <div className={styles.container} />
    </>
  )
}

export default Home
