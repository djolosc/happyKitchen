import GetStarted from './getStarted';
import React from 'react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router, Route, MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';
import App from '../../App';
import DishForm from '../DishForm/dishForm';
describe('getStarted page', () => {
  test('rendering button', () => {
    render(
      <Router>
        <App />
      </Router>
    );
    const bottomNavFirstPage = screen.getByTestId('bottomNavAction2');
    userEvent.click(bottomNavFirstPage);
    const getStartedButton = screen.getByTestId('getStartedButton');
    expect(getStartedButton).toBeInTheDocument();
    userEvent.click(getStartedButton);
    expect(screen.getByTestId('dishForm')).toBeInTheDocument();
  });
});
