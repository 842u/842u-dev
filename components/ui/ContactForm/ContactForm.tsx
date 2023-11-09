/* eslint react/jsx-props-no-spreading: 0, no-nested-ternary: 0  */

'use client';

import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { Button } from '../Button';

type FormValues = {
  name: string;
  email: string;
  message: string;
};

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitted, isSubmitSuccessful, isValid },
  } = useForm<FormValues>({
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  useEffect(() => {
    reset();
  }, [isSubmitSuccessful]);

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    // eslint-disable-next-line
    console.log(data);
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
      <input
        className={`mt-10 border-b-2 bg-light text-2xl placeholder:text-2xl placeholder:text-dark-lighter dark:bg-dark ${
          isSubmitted
            ? errors.name?.message
              ? 'border-error dark:border-error'
              : 'border-success dark:border-success'
            : 'border-dark dark:border-light'
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
      <p className="whitespace-pre-wrap text-right">
        {errors.name?.message || ' '}
      </p>

      <input
        className={`mt-10 border-b-2 bg-light text-2xl placeholder:text-2xl placeholder:text-dark-lighter dark:bg-dark ${
          isSubmitted
            ? errors.email?.message
              ? 'border-error dark:border-error'
              : 'border-success dark:border-success'
            : 'border-dark dark:border-light'
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
      <p className="whitespace-pre-wrap text-right">
        {errors.email?.message || ' '}
      </p>

      <textarea
        className={`mt-10 border-b-2 bg-light text-2xl placeholder:text-2xl placeholder:text-dark-lighter dark:bg-dark ${
          isSubmitted
            ? errors.message?.message
              ? 'border-error dark:border-error'
              : 'border-success dark:border-success'
            : 'border-dark dark:border-light'
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
      <p className="whitespace-pre-wrap text-right">
        {errors.message?.message || ' '}
      </p>

      <Button
        className="mt-14"
        disabled={isSubmitted && !isValid}
        type="submit"
      >
        Send
      </Button>
    </form>
  );
}
