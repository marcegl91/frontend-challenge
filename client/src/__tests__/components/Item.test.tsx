import React from 'react'

import { render, screen } from '@testing-library/react'
import Item from '../../app/components/Item'

test('renders new item with no decimals', () => {
  render(<Item title={'A Product'} price={{ amount: 590, currency: 'ARS', decimals: 0 }} picture={'anUrl'} description={'A Description'} condition={'new'} soldQuantity={10} />)
  const titleElement = screen.getByText(/A Product/i)
  const priceElement = screen.getByText(/590/i)
  const decimalsElement = screen.getByText(/00/i)
  const descriptionElement = screen.getByText(/A Description/i)
  const conditionElement = screen.getByText(/Nuevo/i)
  const soldQuantity = screen.getByText(/10/i)

  expect(titleElement).toBeInTheDocument()
  expect(priceElement).toBeInTheDocument()
  expect(decimalsElement).toBeInTheDocument()
  expect(descriptionElement).toBeInTheDocument()
  expect(conditionElement).toBeInTheDocument()
  expect(soldQuantity).toBeInTheDocument()
})

test('renders used item with decimals and a large price', () => {
  render(<Item title={'A Product'} price={{ amount: 478325, currency: 'ARS', decimals: 45 }} picture={'anUrl'} description={'A Description'} condition={'used'} soldQuantity={10} />)
  const titleElement = screen.getByText(/A Product/i)
  const priceElement = screen.getByText(/478.325/i)
  const decimalsElement = screen.getByText(/45/i)
  const descriptionElement = screen.getByText(/A Description/i)
  const conditionElement = screen.getByText(/Usado/i)
  const soldQuantity = screen.getByText(/10/i)

  expect(titleElement).toBeInTheDocument()
  expect(priceElement).toBeInTheDocument()
  expect(decimalsElement).toBeInTheDocument()
  expect(descriptionElement).toBeInTheDocument()
  expect(conditionElement).toBeInTheDocument()
  expect(soldQuantity).toBeInTheDocument()
})
