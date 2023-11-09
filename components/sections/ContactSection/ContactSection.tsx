/* eslint react/jsx-props-no-spreading: 0, no-nested-ternary: 0  */

'use client';

import { SubmitHandler, useForm } from 'react-hook-form';

import { Section } from '../Section';

type FormValues = {
  name: string;
  email: string;
  message: string;
};

export function ContactSection() {
  const {
    register,
    handleSubmit,
    getFieldState,
    formState: { errors, isSubmitted },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

  console.log(getFieldState('name'));

  return (
    <Section title="contact">
      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <input
          className={`border-b-2 bg-light text-2xl placeholder:text-2xl placeholder:text-dark-lighter ${
            isSubmitted
              ? errors.name?.message
                ? 'border-error'
                : 'border-success'
              : 'border-dark'
          }`}
          {...register('name', {
            required: 'This field is required.',
            minLength: {
              value: 3,
              message: 'Minimum length is 3.',
            },
            maxLength: {
              value: 50,
              message: 'Maximum length is 50.',
            },
          })}
          placeholder="Enter your name ..."
          type="text"
        />
        <p className="text-right">{errors.name?.message}</p>

        <input
          className={`border-b-2 bg-light text-2xl placeholder:text-2xl placeholder:text-dark-lighter ${
            isSubmitted
              ? errors.email?.message
                ? 'border-error'
                : 'border-success'
              : 'border-dark'
          }`}
          {...register('email', {
            required: 'This field is required.',
            minLength: {
              value: 3,
              message: 'Minimum length is 3.',
            },
            maxLength: {
              value: 254,
              message: 'Maximum length is 254.',
            },
            pattern: {
              value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/i,
              message: 'Enter valid e-mail adress.',
            },
          })}
          placeholder="Enter your e-mail ..."
          type="email"
        />
        <p className="text-right">{errors.email?.message}</p>

        <textarea
          className={`border-b-2 bg-light text-2xl placeholder:text-2xl placeholder:text-dark-lighter ${
            isSubmitted
              ? errors.message?.message
                ? 'border-error'
                : 'border-success'
              : 'border-dark'
          }`}
          {...register('message', {
            required: 'This field is required.',
            minLength: {
              value: 10,
              message: 'Minimum length is 10.',
            },
            maxLength: {
              value: 3000,
              message: 'Maximum length is 3000.',
            },
          })}
          placeholder="Enter your message ..."
        />
        <p className="text-right">{errors.message?.message}</p>
        <button type="submit">Send</button>
      </form>
    </Section>
  );
}
