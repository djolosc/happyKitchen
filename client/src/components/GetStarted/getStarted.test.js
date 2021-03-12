import GetStarted from './getStarted';
import React from 'react';
import '@testing-library/jest-dom';
import { Router, Route } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';
import App from '../../App';

describe('getStarted page', () => {
  test('rendering button', () => {
    const history = createMemoryHistory();
    const route = '/get_started';
    history.push(route);
    render(
      <Router history={history}>
        <App />
      </Router>
    );

    // const getStartedButton = screen.getByTestId('getStartedButton');
    // expect(getStartedButton).toBeInTheDocument();
    // userEvent.click(getStartedButton);
    // screen.debug();
    // expect(screen.getByTestId('dishForm')).toBeInTheDocument();
  });
});
