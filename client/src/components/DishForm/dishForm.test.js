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

  test('first test', () => {
    render(
      <Router history={history}>
        <Route exact path="/add_dish">
          <DishForm />
        </Route>
      </Router>
    );

    // render(<div data-testid="dishForm"></div>);

    const h2 = screen.getByText(/Add a new dish/i);
    console.log(h2);
    expect(h2).toBeInTheDocument();
  });
});

// test('submit test mock',T () => {
// render()
// const clicked =
// })
