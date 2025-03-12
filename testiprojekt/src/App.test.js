// src/App.test.js
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('renders initial count', () => {
    render(<App />);
    expect(screen.getByText('Loendur: 0')).toBeInTheDocument();
  });

  test('increments count when "Lisa" button is clicked', () => {
    render(<App />);
    fireEvent.click(screen.getByText('Lisa'));
    expect(screen.getByText('Loendur: 1')).toBeInTheDocument();
  });

  test('decrements count when "Vähenda" button is clicked', () => {
    render(<App />);
    fireEvent.click(screen.getByText('Vähenda'));
    expect(screen.getByText('Loendur: -1')).toBeInTheDocument();
  });

  test('increments and decrements count multiple times', () => {
    render(<App />);
    fireEvent.click(screen.getByText('Lisa'));
    fireEvent.click(screen.getByText('Lisa'));
    fireEvent.click(screen.getByText('Vähenda'));
    expect(screen.getByText('Loendur: 1')).toBeInTheDocument();
  });

  test('renders the correct buttons', () => {
    render(<App />);
    expect(screen.getByText('Lisa')).toBeInTheDocument();
    expect(screen.getByText('Vähenda')).toBeInTheDocument();
  });

  test('initial count is zero', () => {
    render(<App />);
    expect(screen.getByText('Loendur: 0')).toBeInTheDocument();
  });

  test('count is displayed correctly', () => {
    render(<App />);
    fireEvent.click(screen.getByText('Lisa'));
    expect(screen.getByText('Loendur: 1')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Vähenda'));
    expect(screen.getByText('Loendur: 0')).toBeInTheDocument();
  });

  test('count can become negative', () => {
    render(<App />);
    fireEvent.click(screen.getByText('Vähenda'));
    fireEvent.click(screen.getByText('Vähenda'));
    expect(screen.getByText('Loendur: -2')).toBeInTheDocument();
  });

  test('renders the correct heading', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: /Loendur:/i })).toBeInTheDocument();
  });

  test('buttons have correct role', () => {
    render(<App />);
    expect(screen.getByRole('button', { name: /Lisa/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Vähenda/i })).toBeInTheDocument();
  });
});