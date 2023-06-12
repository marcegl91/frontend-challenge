import React from 'react'
import styles from './Item.module.scss'
import { type Price } from '../../../types/item_response'

interface Props {
  title: string
  price: Price
  picture: string
  description: string
  condition: string
  soldQuantity: number
}

const transformCondition = (condition: string): string => {
  switch (condition) {
    case 'new': {
      return 'Nuevo'
    }
    case 'used': {
      return 'Usado'
    }
    default: {
      return ''
    }
  }
}

const transformDecimals = (decimals: number): string => {
  return decimals === 0 ? '00' : decimals.toString()
}

export function Item({ title, price, picture, description, condition, soldQuantity }: Props): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img className={styles.picture} src={picture} alt={title} />
        <div className={styles.descprod}>Descripción del producto</div>
        <div className={styles.description}>{description}</div>
      </div>
      <div className={styles.detail}>
        <div className={styles.subtitle}>{transformCondition(condition)} - {soldQuantity} vendidos</div>
        <div className={styles.title}>{title}</div>
        <div className={styles.price}>$ {price.amount.toLocaleString()}<sup className={styles.decimals}>{transformDecimals(price.decimals)}</sup></div>
        <button className={styles.button}>Comprar</button>
      </div>
    </div>
  )
}

export default Item
