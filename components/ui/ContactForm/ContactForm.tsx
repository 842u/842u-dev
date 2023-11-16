/* eslint react/jsx-props-no-spreading: 0, no-nested-ternary: 0  */

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
  const responeMessageElementRef = useRef<HTMLParagraphElement>(null);

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
      responeMessageElementRef.current!.innerText = responseData.message;
    }

    responeMessageElementRef.current!.innerText = responseData.message;
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

  return (
    <form
      className={twMerge(`flex flex-col`, className)}
      onSubmit={handleSubmit(onSubmit)}
    >
      <label className="invisible absolute" htmlFor="nameInput">
        Name
      </label>
      <input
        className={`mt-10 border-b-2 bg-light text-2xl transition-[background-color] placeholder:text-2xl placeholder:text-dark-lighter dark:bg-dark md:text-3xl ${setFormInputBorder(
          isSubmitted,
          errors.name?.message,
        )}`}
        {...register('name', nameInputValidationRules)}
        id="nameInput"
        placeholder="Enter your name ..."
        type="text"
      />
      <p className="whitespace-pre-wrap text-right md:text-xl">
        {errors.name?.message || ' '}
      </p>

      <label className="invisible absolute" htmlFor="emailInput">
        Email
      </label>
      <input
        className={`mt-10 border-b-2 bg-light text-2xl transition-[background-color] placeholder:text-2xl placeholder:text-dark-lighter dark:bg-dark md:text-3xl ${setFormInputBorder(
          isSubmitted,
          errors.email?.message,
        )}`}
        {...register('email', emailInputValidationRules)}
        id="emailInput"
        placeholder="Enter your e-mail ..."
        type="email"
      />
      <p className="whitespace-pre-wrap text-right md:text-xl">
        {errors.email?.message || ' '}
      </p>

      <label className="invisible absolute" htmlFor="messageInput">
        Message
      </label>
      <textarea
        className={`mt-10 border-b-2 bg-light text-2xl transition-[background-color] placeholder:text-2xl placeholder:text-dark-lighter dark:bg-dark md:text-3xl ${setFormInputBorder(
          isSubmitted,
          errors.message?.message,
        )}`}
        {...register('message', messageInputValidationRules)}
        id="messageInput"
        placeholder="Enter your message ..."
        rows={4}
      />
      <p className="whitespace-pre-wrap text-right md:text-xl">
        {errors.message?.message || ' '}
      </p>

      <Button
        className="mt-14"
        disabled={(isSubmitted && !isValid) || isSubmitting}
        type="submit"
      >
        <SubmitLoader isSubmitting={isSubmitting} text="Send" />
      </Button>
      <p
        ref={responeMessageElementRef}
        className="my-10 whitespace-pre-wrap md:text-xl"
      >
        {' '}
      </p>
    </form>
  );
}
