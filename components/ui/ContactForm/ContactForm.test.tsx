import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ContactForm } from './ContactForm';

describe('ContactForm', () => {
  it('should render input for a name', () => {
    render(<ContactForm />);

    const nameInput = screen.getByPlaceholderText(/name/i);

    expect(nameInput).toBeInTheDocument();
  });

  it('should render input for an email', () => {
    render(<ContactForm />);

    const emailInput = screen.getByPlaceholderText(/e-mail/i);

    expect(emailInput).toBeInTheDocument();
  });

  it('should render input for a message', () => {
    render(<ContactForm />);

    const messageInput = screen.getByPlaceholderText(/message/i);

    expect(messageInput).toBeInTheDocument();
  });

  it('should render submit button', () => {
    render(<ContactForm />);

    const submitButton = screen.getByRole('button');

    expect(submitButton).toBeInTheDocument();
  });

  it('should initialy enable submit button', () => {
    render(<ContactForm />);

    const submitButton = screen.getByRole('button');

    expect(submitButton).toBeEnabled();
  });

  it('should disable submit button after submiting form with wrong inputs', async () => {
    const user = userEvent.setup();

    render(<ContactForm />);

    const submitButton = screen.getByRole('button');

    await user.click(submitButton);

    expect(submitButton).not.toBeEnabled();
  });

  it('should enable submit button after providing correct imputs', async () => {
    const user = userEvent.setup();
    const correctName = 'name';
    const correctEmail = 'email@email.com';
    const correctMessage = '0123456789';

    render(<ContactForm />);

    const submitButton = screen.getByRole('button');
    const nameInput = screen.getByPlaceholderText(/name/i);
    const emailInput = screen.getByPlaceholderText(/e-mail/i);
    const messageInput = screen.getByPlaceholderText(/message/i);

    await user.click(submitButton);
    await user.type(nameInput, correctName);
    await user.type(emailInput, correctEmail);
    await user.type(messageInput, correctMessage);

    expect(submitButton).toBeEnabled();
  });
});
