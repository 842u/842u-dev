/* eslint react/button-has-type:0 */

import { ButtonHTMLAttributes } from 'react';

import { SelectionArrow } from '@/components/decorative/SelectionArrow';

type ButtonProps = {
  disabled?: boolean;
  type: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, type, disabled }: ButtonProps) {
  return (
    <button
      className="text-3xl before:block before:h-0.5 before:w-full before:bg-dark after:block after:h-0.5 after:w-full after:bg-dark disabled:text-light-darker disabled:before:bg-light-darker disabled:after:bg-light-darker dark:before:bg-light dark:after:bg-light disabled:dark:text-dark-lighter disabled:dark:before:bg-dark-lighter disabled:dark:after:bg-dark-lighter md:w-64 md:min-w-fit md:text-4xl"
      disabled={disabled}
      type={type}
    >
      <div className="my-4 flex items-center gap-6 md:w-fit">
        <SelectionArrow />
        {children}
      </div>
    </button>
  );
}
