import React from 'react'

import styles from './FormInput.module.scss'

interface Props {
  name: string
  type: string
  placeholder: string
  value: string
  onChange: any
}

function FormInput({ name, type, placeholder, value, onChange }: Props): JSX.Element {
  return (
    <>
      <input className={styles.field} type={type} id={name} name={name} placeholder={placeholder} value={value} onChange={onChange} />
    </>
  )
}

export default FormInput
