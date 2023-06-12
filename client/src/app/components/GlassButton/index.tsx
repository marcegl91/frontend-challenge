import React from 'react'

import styles from './GlassButton.module.scss'
import Glass from '../Glass'

interface Props {
  disabled: boolean
}

function GlassButton({ disabled }: Props): JSX.Element {
  return (
    <button type="submit" className={styles.container} disabled={disabled}>
      <Glass />
    </button>
  )
}

export default GlassButton
