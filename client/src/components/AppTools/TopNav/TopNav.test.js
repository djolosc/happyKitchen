import React from 'react';
import '@testing-library/jest-dom';
import App from '../../../App';
import { Router } from 'react-router-dom';
import { render, screen, } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import TopNav from './TopNav';

describe("TopNav", () => {
    const history = createMemoryHistory();
    const route = '/';
    history.push(route);

    it('should be defined', () => {
   expect(TopNav).toBeDefined();
 });

    test('render TopNav component', () => {
    render(
      <Router path="/" history={history}>
        <App />
      </Router>
    );
        const topNav = screen.getByTestId("TopNavtest");
        console.log(topNav)
   // expect(TopNav).toBeInTheDocument();
  });
})