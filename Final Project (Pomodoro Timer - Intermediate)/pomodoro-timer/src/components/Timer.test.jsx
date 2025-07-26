import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import Timer from './Timer';
import '@testing-library/jest-dom';

describe('Timer Component', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  beforeAll(() => {
  window.HTMLMediaElement.prototype.play = () => {};
});


  afterEach(() => {
    jest.useRealTimers();
    jest.clearAllTimers();
  });

  test('renders initial time (25:00)', () => {
    render(<Timer />);
    expect(screen.getByText('25:00')).toBeInTheDocument();
  });

  test('starts and pauses timer', async () => {
    render(<Timer />);
    
    // Start timer
    fireEvent.click(screen.getByRole('button', { name: /start/i }));
    expect(screen.getByText(/pause/i)).toBeInTheDocument();
    
    // Advance timers by 1 second
    act(() => {
      jest.advanceTimersByTime(1000);
    });
    
    expect(screen.getByText('24:59')).toBeInTheDocument();
    
    // Pause timer
    fireEvent.click(screen.getByRole('button', { name: /pause/i }));
    act(() => {
      jest.advanceTimersByTime(1000);
    });
    
    expect(screen.getByText('24:59')).toBeInTheDocument(); // Time shouldn't change
  });

  test('resets timer', async () => {
    render(<Timer />);
    
    // Start and let it run for 5 seconds
    fireEvent.click(screen.getByRole('button', { name: /start/i }));
    act(() => {
      jest.advanceTimersByTime(5000);
    });
    
    // Reset
    fireEvent.click(screen.getByRole('button', { name: /reset/i }));
    expect(screen.getByText('25:00')).toBeInTheDocument();
  });

  test('transitions to break after work session', async () => {
  render(<Timer />);
  
  // Start timer
  fireEvent.click(screen.getByRole('button', { name: /start/i }));
  
  // Fast-forward through the entire work session + buffer
  act(() => {
    jest.advanceTimersByTime(1500 * 1000 + 100); // 25 minutes + small buffer
  });

  // Check for break session - use more specific query
  await screen.findByText((content, element) => {
    return element.tagName.toLowerCase() === 'span' && 
           content.includes('Short Break');
  });
  
  expect(screen.getByText('05:00')).toBeInTheDocument();
});
});