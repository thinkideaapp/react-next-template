import React from 'react'
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Home from './home'

test('Home com boas vindas', () => {
    render(
      <Home name='brother' />,
    );
    expect(screen.getByTestId('title')).toHaveTextContent('Hi brother!');
});