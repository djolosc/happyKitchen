import OrderList from './orderList';
import React, { useState } from 'react';
import '@testing-library/jest-dom';

import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ApiService from '../../ApiService';
import { ExpansionPanelActions } from '@material-ui/core';

jest.mock('../../ApiService');

const fakeOrders = [
  {
    id: 1,
    clientName: 'Marko',
    clientAddress: 'Markovic',
    clientPhone: 123,
    comments: 'Good',
    createdAt: '2021-03-12T11:14:16.747Z',
    updatedAt: '2021-03-12T11:14:16.747Z',
    Dishes: [
      {
        id: 1,
        title: 'fdfd',
        description: 'fdfd',
        price: '33.00',
        image: null,
        createdAt: '2021-03-11T18:54:05.391Z',
        updatedAt: '2021-03-11T18:54:05.391Z',
        DishesPerOrder: {
          createdAt: '2021-03-12T11:14:16.792Z',
          updatedAt: '2021-03-12T11:14:16.792Z',
          DishId: 1,
          OrderId: 1,
        },
      },
    ],
  },
];

describe('OrderList', () => {
  const orders = ApiService.getOrders.mockResolvedValue(fakeOrders);

  it('loads the page when there is no orders', async () => {
    render(<OrderList orders={[]} />);
    expect(screen.getByText('There are no orders, yet!!!')).toBeInTheDocument();
  });

  it('loads the page when there is orders', async () => {
    render(<OrderList orders={fakeOrders} />);
    expect(screen.getByTestId('orderList')).toBeInTheDocument();
  });
});
