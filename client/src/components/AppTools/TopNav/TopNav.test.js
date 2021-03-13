import React from 'react';
import '@testing-library/jest-dom';
import App from '../../../App';
import { Router } from 'react-router-dom';
import { getByRole, render, screen, } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { getByText, fireEvent, getByLabelText, userEvent } from "@testing-library/react";
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
        expect(topNav).toBeInTheDocument();
    });
    
    test('on click opens navigation menu displays Add a dish', () => {
        render(
            <Router path='/' history={history}>
                <App />
            </Router>
        );
        const menuButton = screen.getByTestId("Menutest");
        fireEvent.click(menuButton)
        const menuopen = screen.getByText(/Add a dish/i)
        expect(menuopen).toBeInTheDocument()
    })

    test('on click opens navigation menu displays create a menu', () => {
    render(
        <Router path='/' history={history}>
            <App />
        </Router>
    );
    const menuButton = screen.getByTestId("Menutest");
    fireEvent.click(menuButton)
    const menuopen = screen.getByText(/create a menu/i)
    expect(menuopen).toBeInTheDocument()
    })
    
    test('on click opens navigation menu displays see menus', () => {
    render(
        <Router path='/' history={history}>
            <App />
        </Router>
    );
    const menuButton = screen.getByTestId("Menutest");
    fireEvent.click(menuButton)
    const menuopen = screen.getByText(/see menus/i)
    expect(menuopen).toBeInTheDocument()
    })
    
    test('on click opens navigation menu displays see orders', () => {
    render(
        <Router path='/' history={history}>
            <App />
        </Router>
    );
    const menuButton = screen.getByTestId("Menutest");
    fireEvent.click(menuButton)
    const menuopen = screen.getByText(/see orders/i)
    expect(menuopen).toBeInTheDocument()
})
})