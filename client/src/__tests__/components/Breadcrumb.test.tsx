import React from 'react'

import { render, screen } from '@testing-library/react'
import Breadcrumb from '../../app/components/Breadcrumb'

test('renders categories', () => {
  render(<Breadcrumb breadcrumbs={['Category1', 'Category2']} />)
  const category1Element = screen.getByText(/Category1/i)
  const category2Element = screen.getByText(/Category2/i)
  expect(category1Element).toBeInTheDocument()
  expect(category2Element).toBeInTheDocument()
})
