// Import necessary React Testing Library helpers
// Import the Counter component here
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Counter from '../components/Counter';

beforeEach(() => {
    // Render the Counter component before each test
    render(<Counter />);
});

test('renders counter message', () => {
    // Verify that the header or static message "Counter" is rendered
    const header = screen.getByText(/counter/i);
    expect(header).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
    // Verify the initial value of the counter is 0
    const counterValue = screen.getByTestId('count');
    expect(counterValue).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
    // Simulate clicking the "+" button and check if the count increments
    const incrementButton = screen.getByText(/\+/i);
    const counterValue = screen.getByTestId('count');
    fireEvent.click(incrementButton);
    expect(counterValue).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
    // Simulate clicking the "-" button and check if the count decrements
    const decrementButton = screen.getByText(/-/i);
    const counterValue = screen.getByTestId('count');
    fireEvent.click(decrementButton);
    expect(counterValue).toHaveTextContent('-1');
});
