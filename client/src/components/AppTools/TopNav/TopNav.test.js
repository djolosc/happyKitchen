import React from 'react';
import '@testing-library/jest-dom';
import App from '../../../App';
import TopNav from './TopNav';
import { Router } from 'react-router-dom';
import { getAllByText, getByTestId, render, screen, } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { getByText, fireEvent, getByLabelText } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';

describe("TopNav render and nav function", () => {
  const history = createMemoryHistory();
  const route = '/';
  history.push(route);

  it('should be defined', () => {
    expect(TopNav).toBeDefined();
  });

  beforeEach(() => {
    render(
      <Router path="/" history={history}>
        <App />
      </Router>
    )
  })
  test('render TopNav component', () => {
    const topNav = screen.getByTestId("TopNavtest");
    expect(topNav).toBeInTheDocument();
  });
    
  test('on click opens navigation menu displays Add a dish', () => {
    const menuButton = screen.getByTestId("Menutest");
    fireEvent.click(menuButton)
    expect(screen.getByTestId("dish")).toBeVisible()
        
  })

  test('on click opens navigation menu displays create a menu', () => {
    const menuButton = screen.getByTestId("Menutest");
    fireEvent.click(menuButton)
    expect(screen.getByTestId("menu")).toBeVisible()
  })
    
  test('on click opens navigation menu displays see menus', () => {
    const menuButton = screen.getByTestId("Menutest");
    fireEvent.click(menuButton)
    expect(screen.getByTestId("see_menu")).toBeVisible()
  })
    
  test('on click opens navigation menu displays see orders', () => {
    const menuButton = screen.getByTestId("Menutest");
    fireEvent.click(menuButton)
    expect(screen.getByTestId("orders")).toBeVisible()
  })
    
  test('navigates to the /add-a-dish', () => {
    const menuButton = screen.getByTestId("Menutest");
    fireEvent.click(menuButton)
    const menuAddDishNav = screen.getByText(/Add a dish/i)
    expect(menuAddDishNav).toBeInTheDocument();
    fireEvent.click(menuAddDishNav);
    expect(screen.getByTestId('dishForm')).toBeInTheDocument();
  });
    
  test('navigates to the /create-a-menu', () => {
    const menuButton = screen.getByTestId("Menutest");
    fireEvent.click(menuButton)
    const menuAddDishNav = screen.getByText(/create a menu/i)
    expect(menuAddDishNav).toBeInTheDocument();
    fireEvent.click(menuAddDishNav);
    expect(screen.getByTestId('menuForm')).toBeInTheDocument();
  });
    
  test('navigates to the /menu', () => {
    const menuButton = screen.getByTestId("Menutest");
    fireEvent.click(menuButton)
    const menuAddDishNav = screen.getByText(/see menus/i)
    expect(menuAddDishNav).toBeInTheDocument();
    fireEvent.click(menuAddDishNav);
    expect(screen.getByTestId('menuList')).toBeInTheDocument();
  });
    
  test('navigates to the /see-orders', () => {
    const menuButton = screen.getByTestId("Menutest");
    fireEvent.click(menuButton)
    const menuAddDishNav = screen.getByText(/see orders/i)
    expect(menuAddDishNav).toBeInTheDocument();
    fireEvent.click(menuAddDishNav);
    expect(screen.getByTestId('loadingPlaceHolder')).toBeInTheDocument();
  });
});