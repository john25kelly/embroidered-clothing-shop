import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('shows the EDYC collection and filters products by category', () => {
  render(<App />);

  expect(screen.getByRole('heading', { name: /clubwear for life afloat/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Cool Kids T-Shirt' })).toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: 'Headwear & accessories' }));

  expect(screen.getByRole('heading', { name: 'Cap' })).toBeInTheDocument();
  expect(screen.queryByRole('heading', { name: 'Cool Kids T-Shirt' })).not.toBeInTheDocument();
});

test('creates an email enquiry for a product', () => {
  render(<App />);

  expect(screen.getAllByRole('link', { name: /enquire about this item/i })[0]).toHaveAttribute(
    'href',
    expect.stringContaining('mailto:clubwear@example.com')
  );
});
