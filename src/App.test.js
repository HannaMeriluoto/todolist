import React from 'react'
import TodoTable from './TodoTable'
import App from './App';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'

test('renders todotable', () => {
  const row = [
    {description: 'Go to coffee', date: '24.11.2020'}
  ]

  const todotable = render(<TodoTable todos={row} />);
  expect(todotable.container).toHaveTextContent('Go to coffee');
})

test('add todo', () => {
  const { container, getByText, getByPlaceholderText } = render(< App />);

  const desc = getByPlaceholderText('Description');
  fireEvent.change(desc, { target: {value: 'Go to coffee' } })
  const date = getByPlaceholderText('Date');
  fireEvent.change(date, { target: { value: '29.11.2020' } })

  const button = getByText('Add');
  fireEvent.click(button);

  expect(screen.getByText('Go to coffee')).toBeInTheDocument();
})