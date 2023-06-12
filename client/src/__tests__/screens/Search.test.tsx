import React from 'react'

import { render } from '@testing-library/react'
import { RouterProvider, createMemoryRouter } from 'react-router-dom'
import Search from '../../app/screens/Search'

const FAKE_RESPONSE = {
  search: 'apple+iphone',
  results: {
    author: {
      name: 'Marcelo',
      lastname: 'Guzman'
    },
    categories: [
      'Celulares y Teléfonos',
      'Celulares y Smartphones'
    ],
    items: [
      {
        id: 'MLA1114219755',
        title: 'Apple iPhone 13 (128 Gb) - Azul',
        price: {
          currency: 'ARS',
          amount: 488949,
          decimals: 23
        },
        picture: 'http://http2.mlstatic.com/D_619667-MLA47781882790_102021-I.jpg',
        condition: 'new',
        free_shipping: true,
        state: 'Capital Federal'
      },
      {
        id: 'MLA825206917',
        title: 'Apple iPhone 11 (64 Gb) - Negro',
        price: {
          currency: 'ARS',
          amount: 315840,
          decimals: 0
        },
        picture: 'http://http2.mlstatic.com/D_656548-MLA46114829749_052021-I.jpg',
        condition: 'new',
        free_shipping: true,
        state: 'Capital Federal'
      },
      {
        id: 'MLA1371553095',
        title: 'Apple iPhone 11 (128 Gb) - Negro',
        price: {
          currency: 'ARS',
          amount: 337592,
          decimals: 0
        },
        picture: 'http://http2.mlstatic.com/D_656548-MLA46114829749_052021-I.jpg',
        condition: 'new',
        free_shipping: true,
        state: 'Misiones'
      },
      {
        id: 'MLA1268643279',
        title: 'Apple iPhone 14 Pro Max (256 Gb) - Morado Oscuro',
        price: {
          currency: 'ARS',
          amount: 846999,
          decimals: 23
        },
        picture: 'http://http2.mlstatic.com/D_605126-MLM51559383638_092022-I.jpg',
        condition: 'new',
        free_shipping: false,
        state: 'Capital Federal'
      }
    ]
  }
}

const routes = [
  {
    path: 'items',
    element: <Search />,
    loader: () => FAKE_RESPONSE
  }
]

const router = createMemoryRouter(routes, {
  initialEntries: ['/', '/items'],
  initialIndex: 1
})

test('renders titles', () => {
  const { getByText, getAllByAltText } = render(<RouterProvider router={router} />)

  FAKE_RESPONSE.results.items.forEach(i => { expect(getByText(i.title)).toBeInTheDocument() })

  expect(getAllByAltText((/Free Shipping/i)).length).toBe(3)
})
