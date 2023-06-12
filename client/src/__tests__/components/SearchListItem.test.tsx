import React from 'react'

import { render, screen } from '@testing-library/react'
import SearchListItem from '../../app/components/SearchListItem'

test('renders new item with no decimals', () => {
  render(<SearchListItem title={'A Product'} price={{ amount: 590, currency: 'ARS', decimals: 0 }} picture={'anUrl'} freeShipping={true} state={'Tierra del Fuego'} />)
  const titleElement = screen.getByText(/A Product/i)
  const priceElement = screen.getByText(/590/i)
  const decimalsElement = screen.getByText(/00/i)
  const freeShipping = screen.getByAltText(/Free Shipping/i)
  const stateElement = screen.getByText(/Tierra del Fuego/i)

  expect(titleElement).toBeInTheDocument()
  expect(priceElement).toBeInTheDocument()
  expect(decimalsElement).toBeInTheDocument()
  expect(freeShipping).toBeInTheDocument()
  expect(stateElement).toBeInTheDocument()
})

test('renders used item with decimals and a large price', () => {
  render(<SearchListItem title={'A Product'} price={{ amount: 478325, currency: 'ARS', decimals: 45 }} picture={'anUrl'} freeShipping={false} state={'Tierra del Fuego'} />)

  const titleElement = screen.getByText(/A Product/i)
  const priceElement = screen.getByText(/478.325/i)
  const decimalsElement = screen.getByText(/45/i)
  const freeShipping = screen.queryByAltText(/Free Shipping/i)
  const stateElement = screen.getByText(/Tierra del Fuego/i)

  expect(titleElement).toBeInTheDocument()
  expect(priceElement).toBeInTheDocument()
  expect(decimalsElement).toBeInTheDocument()
  expect(freeShipping).not.toBeInTheDocument()
  expect(stateElement).toBeInTheDocument()
})
