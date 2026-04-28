import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { makeStore } from '@/store/store';
import { FocusSelector } from './FocusSelector';
test('renders focus options', () => {
  render(<Provider store={makeStore()}><FocusSelector compact /></Provider>);
  expect(screen.getByRole('button', { name: 'React' })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Cloud' })).toBeInTheDocument();
});
