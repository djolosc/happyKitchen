import React from 'react';
import '@testing-library/jest-dom';
import { Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';
import App from './../../../App';

describe('BotNav', () => {
  const history = createMemoryHistory();
  const route = '/';
  history.push(route);

  test('navigates to the home page', () => {
    render(
      <Router path="/" history={history}>
        <App />
      </Router>
    );
    const bottomNavFirstPage = screen.getByTestId('bottomNavAction1');
    expect(bottomNavFirstPage).toBeInTheDocument();

    userEvent.click(bottomNavFirstPage);

    expect(screen.getByTestId('home')).toBeInTheDocument();
  });

  test('navigates to the /get_startes page', () => {
    render(
      <Router path="/" history={history}>
        <App />
      </Router>
    );
    const bottomNavFirstPage = screen.getByTestId('bottomNavAction2');
    expect(bottomNavFirstPage).toBeInTheDocument();

    userEvent.click(bottomNavFirstPage);

    expect(screen.getByTestId('getStarted')).toBeInTheDocument();
  });

  test('navigates to the /create_order page', () => {
    render(
      <Router path="/" history={history}>
        <App />
      </Router>
    );
    const bottomNavFirstPage = screen.getByTestId('bottomNavAction3');
    expect(bottomNavFirstPage).toBeInTheDocument();

    userEvent.click(bottomNavFirstPage);

    expect(screen.getByTestId('orderForm')).toBeInTheDocument();
  });
});
