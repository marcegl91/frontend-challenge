import React from 'react'
import styles from './Breadcrumb.module.scss'

interface Props {
  breadcrumbs: string[]
}

function Breadcrumb({ breadcrumbs }: Props): JSX.Element {
  const breadcrumbItems = breadcrumbs.map((item, i) => (
    <span key={i} className={styles.category}>{item}
      {i < breadcrumbs.length - 1 && <span className={styles.greater}> &gt; </span>}
    </span>
  ))

  return (
    <div className={styles.container}>
      {breadcrumbItems}
    </div>
  )
}

export default Breadcrumb
