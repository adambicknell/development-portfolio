import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { makeStore } from '@/store/store';
import { FocusSelector } from './FocusSelector';

test('renders focus options', () => {
  render(<Provider store={makeStore()}><FocusSelector compact /></Provider>);
  expect(screen.getByRole('button', { name: 'React & Frontend' })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Cloud & Infrastructure' })).toBeInTheDocument();
});

test('allows clearing the selected focus by clicking the active option again', () => {
  render(<Provider store={makeStore()}><FocusSelector compact /></Provider>);
  const reactButton = screen.getByRole('button', { name: 'React & Frontend' });
  fireEvent.click(reactButton);
  expect(screen.getByText('Selected: React & Frontend')).toBeInTheDocument();
  fireEvent.click(reactButton);
  expect(screen.getByText('Selected: All')).toBeInTheDocument();
});
