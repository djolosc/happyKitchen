import GetStarted from './getStarted';
import React from 'react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import userEvent from '@testing-library/user-event';
import App from '../../App';

describe('getStarted page', () => {
  test('button navigates correctly', () => {
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

  test('shows proper text when loaded', () => {
    render(
      <Router>
        <GetStarted />
      </Router>
    );
    const text = screen.getByText("Let's cook!");
    expect(text).toBeInTheDocument();
  });
});
