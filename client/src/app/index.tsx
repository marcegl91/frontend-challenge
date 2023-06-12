import React from 'react'

import '../scss/application.scss'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { Home } from './screens/Home'
import { ItemDetail, loader as ItemLoader } from './screens/ItemDetail'
import { Search, loader as SearchLoader } from './screens/Search'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: 'items',
    element: <Search />,
    loader: SearchLoader
  },
  {
    path: 'items/:itemId',
    element: <ItemDetail />,
    loader: ItemLoader
  }
])

function App(): JSX.Element {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  )
}

export default App
