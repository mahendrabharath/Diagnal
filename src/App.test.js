import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';
import SearchComponent from './components/SearchComponent';

test('renders learn react link', () => {
  const result = render(<SearchComponent />);

  console.log(result);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
});

// it