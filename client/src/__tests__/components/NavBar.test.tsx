import React from 'react'

import { render } from '@testing-library/react'
import NavBar from '../../app/components/NavBar'

import { BrowserRouter } from 'react-router-dom'

test('when no search term was provided', () => {
  const { container } = render(<BrowserRouter><NavBar /></BrowserRouter>)
  const button = container.querySelector('button')

  expect(button).toBeDisabled()
})

test('when search term was provided', () => {
  const { container, getByDisplayValue } = render(<BrowserRouter><NavBar query={'A Term'} /></BrowserRouter>)
  const button = container.querySelector('button')
  const input = getByDisplayValue(/A Term/i)

  expect(button).toBeEnabled()
  expect(input).toBeInTheDocument()
})
