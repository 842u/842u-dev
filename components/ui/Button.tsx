/* eslint react/button-has-type:0 */

import { ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

import { SelectionArrow } from '@/components/decorative/SelectionArrow';

type ButtonProps = {
  disabled?: boolean;
  type: 'button' | 'submit' | 'reset';
  className?: string;
  children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, type, disabled, className }: ButtonProps) {
  return (
    <button
      className={twMerge(
        `before:bg-dark after:bg-dark hover:animate-blink disabled:text-light-darker disabled:before:bg-light-darker disabled:after:bg-light-darker dark:before:bg-light dark:after:bg-light dark:disabled:text-dark-lighter dark:disabled:before:bg-dark-lighter dark:disabled:after:bg-dark-lighter cursor-pointer text-3xl before:block before:h-0.5 before:w-full after:block after:h-0.5 after:w-full disabled:hover:animate-none md:w-64 md:min-w-fit md:text-4xl`,
        className,
      )}
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
