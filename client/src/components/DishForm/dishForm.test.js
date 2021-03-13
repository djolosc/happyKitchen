import { render, screen, UserEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import DishForm from './dishForm';
import { useHistory } from 'react-router';
import { Router, Route, Switch } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { ExpansionPanelActions } from '@material-ui/core';

describe('dishForm', () => {
  let history;

  beforeEach(() => {
    history = createMemoryHistory();
    history.push('/add_dish');
  });

  test('Title rendered to screen', () => {
    render(
      <Router history={history}>
        <Route exact path="/add_dish">
          <DishForm />
        </Route>
      </Router>
    );
    const h2 = screen.getByText(/Add a new dish/i);
    console.log(h2);
    expect(h2).toBeInTheDocument();
  });

  //test inputs are rendered empty
  test('Input with placeholder Title renders empty', () => {
    render(
  <Router history={history}>
    <Route exact path="/add_dish">
      <DishForm />
    </Route>
  </Router>
  );
    // const titleInput = screen.getByPlaceholderText('Title');
    // expect(titleInput).toBeInTheDocument();
    // expect(titleInput).toBeEmpty();
  })
  //test submit button works 
});
