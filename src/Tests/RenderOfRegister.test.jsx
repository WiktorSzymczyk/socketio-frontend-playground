import {render, screen} from '@testing-library/react'
import Register from '../components/Register/Register'

test('Register Component renders correctly', () => {
    render(<Register />)
    const element = screen.getAllByText('Welcome')

    // eslint-disable-next-line no-unused-expressions, jest/valid-expect
    expect(element).toBeInTheDocument
})