import React from 'react'

import { render } from '@testing-library/react'
import { RouterProvider, createMemoryRouter } from 'react-router-dom'
import { ItemDetail } from '../../app/screens/ItemDetail'
import { type ItemResponse } from '../../types/item_response'

const FAKE_RESPONSE: ItemResponse = {
  author: {
    name: 'Marcelo',
    lastname: 'Guzman'
  },
  item: {
    id: 'MLA1144350591',
    title: 'Apple iPhone 11 (128 Gb) - Negro',
    price: {
      currency: 'ARS',
      amount: 342500,
      decimals: 0
    },
    picture: 'http://http2.mlstatic.com/D_865864-MLA46114990464_052021-O.jpg',
    condition: 'new',
    free_shipping: true,
    description: 'Graba videos 4K y captura retratos espectaculares y paisajes increíbles con el sistema de dos cámaras.',
    sold_quantity: 4,
    breadcrumbs: [
      'Celulares y Teléfonos',
      'Celulares y Smartphones'
    ]
  }
}

const routes = [
  {
    path: 'items/:itemId',
    element: <ItemDetail />,
    loader: () => FAKE_RESPONSE
  }
]

const router = createMemoryRouter(routes, {
  initialEntries: ['/', '/items/MLA1144350591'],
  initialIndex: 1
})

test('renders labels', () => {
  const { getByText } = render(<RouterProvider router={router} />)
  expect(getByText(/vendidos/i)).toBeInTheDocument()
})

test('when the component is rendered, it shows the item details', async () => {
  const { getByText } = render(<RouterProvider router={router} />)

  expect(getByText(FAKE_RESPONSE.item.title)).toBeInTheDocument()
  expect(getByText(FAKE_RESPONSE.item.description)).toBeInTheDocument()
})
