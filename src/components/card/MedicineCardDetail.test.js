// MedicineCardDetail.test.js
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import MedicineCardDetail from './MedicineCardDetail';
import { fetchDataDetails } from '../../utils/utils';

// Mock fetchDataDetails
jest.mock('../../utils/utils', () => ({
  fetchDataDetails: jest.fn(),
}));

const mockData = {
  name: 'Aspirin',
  type: 'Tablet',
  strength: '500mg',
};

test('renders loading spinner initially', () => {
  fetchDataDetails.mockImplementation(() => new Promise(() => {})); // Never resolve the promise
  render(
    <MemoryRouter initialEntries={['/medications/Aspirin']}>
      <Route path="/medications/:term">
        <MedicineCardDetail />
      </Route>
    </MemoryRouter>
  );
  expect(screen.getByRole('progressbar')).toBeInTheDocument();
});

test('renders error message on fetch failure', async () => {
  fetchDataDetails.mockRejectedValueOnce(new Error('Failed to fetch'));
  render(
    <MemoryRouter initialEntries={['/medications/Aspirin']}>
      <Route path="/medications/:term">
        <MedicineCardDetail />
      </Route>
    </MemoryRouter>
  );
  await waitFor(() => expect(screen.getByText('Failed to fetch')).toBeInTheDocument());
});

test('renders fetched data', async () => {
  fetchDataDetails.mockResolvedValueOnce(mockData);
  render(
    <MemoryRouter initialEntries={['/medications/Aspirin']}>
      <Route path="/medications/:term">
        <MedicineCardDetail />
      </Route>
    </MemoryRouter>
  );
  await waitFor(() => expect(screen.getByText('Aspirin')).toBeInTheDocument());
  await waitFor(() => expect(screen.getByText('Tablet')).toBeInTheDocument());
  await waitFor(() => expect(screen.getByText('500mg')).toBeInTheDocument());
});
