/* eslint react/jsx-props-no-spreading: 0, no-nested-ternary: 0  */

'use client';

import { useTheme } from 'next-themes';
import { useEffect, useRef } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { PulseLoader } from 'react-spinners';

import { ContactFormValues } from '@/types';
import {
  emailInputValidationRules,
  messageInputValidationRules,
  nameInputValidationRules,
} from '@/utils/validation';

import { Button } from '../Button';

type ContactFormProps = {
  className?: string;
};

export function ContactForm({ className }: ContactFormProps) {
  const responeMessageRef = useRef<HTMLParagraphElement>(null);
  const { theme } = useTheme();

  const {
    register,
    handleSubmit,
    reset,
    setError,
    resetField,
    formState: {
      errors,
      isSubmitted,
      isSubmitSuccessful,
      isValid,
      isSubmitting,
    },
  } = useForm<ContactFormValues>({
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  useEffect(() => {
    reset();
  }, [isSubmitSuccessful]);

  const onSubmit: SubmitHandler<ContactFormValues> = async (data) => {
    const formData = JSON.stringify(data);

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: formData,
    });

    const responseData = await response.json();

    if (!response.ok && responseData.inputIdentifier) {
      resetField(responseData.inputIdentifier);
      setError(
        responseData.inputIdentifier,
        {
          type: 'custom',
          message: responseData.message,
        },
        { shouldFocus: true },
      );
    } else if (!response.ok) {
      responeMessageRef.current!.innerText = responseData.message;
    }

    responeMessageRef.current!.innerText = responseData.message;
  };

  return (
    <form
      className={`flex flex-col ${className}`}
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        className={`mt-10 border-b-2 bg-light text-2xl transition-[background-color] placeholder:text-2xl placeholder:text-dark-lighter dark:bg-dark md:text-3xl ${
          isSubmitted
            ? errors.name?.message
              ? 'border-error dark:border-error'
              : 'border-success dark:border-success'
            : 'border-dark dark:border-light'
        }`}
        {...register('name', nameInputValidationRules)}
        placeholder="Enter your name ..."
        type="text"
      />
      <p className="whitespace-pre-wrap text-right md:text-xl">
        {errors.name?.message || ' '}
      </p>

      <input
        className={`mt-10 border-b-2 bg-light text-2xl transition-[background-color] placeholder:text-2xl placeholder:text-dark-lighter dark:bg-dark md:text-3xl ${
          isSubmitted
            ? errors.email?.message
              ? 'border-error dark:border-error'
              : 'border-success dark:border-success'
            : 'border-dark dark:border-light'
        }`}
        {...register('email', emailInputValidationRules)}
        placeholder="Enter your e-mail ..."
        type="email"
      />
      <p className="whitespace-pre-wrap text-right md:text-xl">
        {errors.email?.message || ' '}
      </p>

      <textarea
        className={`mt-10 border-b-2 bg-light text-2xl transition-[background-color] placeholder:text-2xl placeholder:text-dark-lighter dark:bg-dark md:text-3xl ${
          isSubmitted
            ? errors.message?.message
              ? 'border-error dark:border-error'
              : 'border-success dark:border-success'
            : 'border-dark dark:border-light'
        }`}
        {...register('message', messageInputValidationRules)}
        placeholder="Enter your message ..."
        rows={4}
      />
      <p className="whitespace-pre-wrap text-right md:text-xl">
        {errors.message?.message || ' '}
      </p>

      <Button
        className="mt-14"
        disabled={isSubmitted && !isValid}
        type="submit"
      >
        {isSubmitting ? (
          <PulseLoader loading color={theme === 'light' ? '#222' : '#faebd7'} />
        ) : (
          'Send'
        )}
      </Button>
      <p
        ref={responeMessageRef}
        className="my-10 whitespace-pre-wrap md:text-xl"
      >
        {' '}
      </p>
    </form>
  );
}
