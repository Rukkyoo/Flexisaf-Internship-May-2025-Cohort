
import { render, screen, fireEvent } from '@testing-library/react';
import Settings from './Settings';
import '@testing-library/jest-dom';

describe('Settings Component', () => {
  const mockProps = {
    isOpen: true,
    onClose: jest.fn(),
    workDuration: 1500,
    shortBreakDuration: 300,
    longBreakDuration: 900,
    onWorkDurationChange: jest.fn(),
    onShortBreakDurationChange: jest.fn(),
    onLongBreakDurationChange: jest.fn(),
    onSubmit: jest.fn(e => e.preventDefault())
  };

  test('renders all form fields', () => {
    render(<Settings {...mockProps} />);
    
    expect(screen.getByLabelText('Work Session Duration (Minutes)')).toBeInTheDocument();
    expect(screen.getByLabelText('Short Break Duration (Minutes)')).toBeInTheDocument();
    expect(screen.getByLabelText('Long Break Duration (Minutes)')).toBeInTheDocument();
  });

  test('handles work duration change', () => {
    render(<Settings {...mockProps} />);
    
    const workSlider = screen.getByLabelText('Work Session Duration (Minutes)');
    fireEvent.change(workSlider, { target: { value: '30' } });
    
    expect(mockProps.onWorkDurationChange).toHaveBeenCalled();
  });

  test('submits form', () => {
    render(<Settings {...mockProps} />);
    
    fireEvent.click(screen.getByText('Save Changes'));
    expect(mockProps.onSubmit).toHaveBeenCalled();
  });

  test('closes when cancel is clicked', () => {
    render(<Settings {...mockProps} />);
    
    fireEvent.click(screen.getByText('Cancel'));
    expect(mockProps.onClose).toHaveBeenCalled();
  });
});