import React, { useState } from 'react'
import { Link, createSearchParams, useNavigate } from 'react-router-dom'

import Logo from '../Logo'

import styles from './NavBar.module.scss'
import FormInput from '../FormInput'
import GlassButton from '../GlassButton'

interface Props {
  query?: string
}

function NavBar({ query }: Props): JSX.Element {
  const [search, setSearch] = useState(query ?? '')

  const navigate = useNavigate()

  const onSubmit = (e: React.FormEvent): void => {
    e.preventDefault()

    navigate({
      pathname: '/items',
      search: createSearchParams({
        search
      }).toString()
    })
  }

  return (
    <div className={styles.navbar}>
      <div className={styles.elements}>
        <Link to='/'>
          <Logo />
        </Link>

        <form className={styles.form} onSubmit={onSubmit}>
          <FormInput name={'search'} type={'text'} placeholder={'Nunca dejes de buscar'} value={search} onChange={(e: any) => { setSearch(e.target.value) }} />
          <GlassButton disabled={search.length === 0} />
        </form>
      </div>
    </div>
  )
}

export default NavBar
