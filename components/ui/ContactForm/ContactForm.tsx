'use client';

import { useEffect, useRef } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

import { SubmitLoader } from '@/components/decorative/SubmitLoader';
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
  const responseMessageElementRef = useRef<HTMLParagraphElement>(null);

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
  }, [isSubmitSuccessful, reset]);

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
      responseMessageElementRef.current!.innerText = responseData.message;
    }

    responseMessageElementRef.current!.innerText = responseData.message;
  };

  function setFormInputBorder(
    formIsSubmitted: boolean,
    errorMessage: string | undefined,
  ) {
    if (formIsSubmitted && errorMessage) {
      return 'border-error dark:border-error';
    }

    if (formIsSubmitted && !errorMessage) {
      return 'border-success dark:border-success';
    }

    return 'border-dark dark:border-light';
  }

  const canSubmit = (!isSubmitting && isValid) || !isSubmitted;

  return (
    <form
      className={twMerge(`flex flex-col`, className)}
      onSubmit={handleSubmit(onSubmit)}
    >
      <label className="invisible absolute" htmlFor="nameInput">
        Name
      </label>
      <input
        className={`bg-light placeholder:text-dark-lighter dark:bg-dark mt-10 border-b-2 text-2xl transition-[background-color] placeholder:text-2xl md:text-3xl ${setFormInputBorder(
          isSubmitted,
          errors.name?.message,
        )}`}
        {...register('name', nameInputValidationRules)}
        id="nameInput"
        placeholder="Enter your name ..."
        type="text"
      />
      <p className="text-right whitespace-pre-wrap md:text-xl">
        {errors.name?.message || ' '}
      </p>

      <label className="invisible absolute" htmlFor="emailInput">
        Email
      </label>
      <input
        className={`bg-light placeholder:text-dark-lighter dark:bg-dark mt-10 border-b-2 text-2xl transition-[background-color] placeholder:text-2xl md:text-3xl ${setFormInputBorder(
          isSubmitted,
          errors.email?.message,
        )}`}
        {...register('email', emailInputValidationRules)}
        id="emailInput"
        placeholder="Enter your e-mail ..."
        type="email"
      />
      <p className="text-right whitespace-pre-wrap md:text-xl">
        {errors.email?.message || ' '}
      </p>

      <label className="invisible absolute" htmlFor="messageInput">
        Message
      </label>
      <textarea
        className={`bg-light placeholder:text-dark-lighter dark:bg-dark mt-10 border-b-2 text-2xl transition-[background-color] placeholder:text-2xl md:text-3xl ${setFormInputBorder(
          isSubmitted,
          errors.message?.message,
        )}`}
        {...register('message', messageInputValidationRules)}
        id="messageInput"
        placeholder="Enter your message ..."
        rows={4}
      />
      <p className="text-right whitespace-pre-wrap md:text-xl">
        {errors.message?.message || ' '}
      </p>

      <Button
        className={twMerge(
          !canSubmit ? 'cursor-not-allowed' : '',
          'mt-14 transition-colors',
        )}
        disabled={!canSubmit}
        type="submit"
      >
        <SubmitLoader isSubmitting={isSubmitting} text="Send" />
      </Button>
      <p
        ref={responseMessageElementRef}
        className="my-10 whitespace-pre-wrap md:text-xl"
      >
        {' '}
      </p>
    </form>
  );
}
