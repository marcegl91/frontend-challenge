import React from 'react'
import styles from './SearchListItem.module.scss'
import FreeShipping from '../FreeShipping'
import { type Price } from '../../../types/search_response'

interface Props {
  title: string
  price: Price
  picture: string
  freeShipping: boolean
  state: string
}

const transformDecimals = (decimals: number): string => {
  return decimals === 0 ? '00' : decimals.toString()
}

export function SearchListItem({ title, price, picture, freeShipping, state }: Props): JSX.Element {
  return (
    <div className={styles.container}>
      <img className={styles.picture} src={picture} alt={title} />
      <div className={styles.texts}>
        <div className={styles.price}>$ {price.amount.toLocaleString()}<sup className={styles.decimals}>{transformDecimals(price.decimals)}</sup> {freeShipping && <FreeShipping />}</div>
        <div className={styles.title}>{title}</div>
      </div>
      <div className={styles.location}>{state}</div>
    </div>
  )
}

export default SearchListItem
