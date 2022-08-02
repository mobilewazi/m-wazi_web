import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Home from '../pages'

describe('Home', () => {
  it('renders without crashing', () => {
    render(<Home />)
    expect(
      screen.getByRole('heading', { name: 'Welcome to M-wazi!' })
    ).toBeTruthy()
  })
})
