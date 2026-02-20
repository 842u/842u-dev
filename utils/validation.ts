import { ValidationRules } from '@/types';

export class InputValidationError extends Error {
  inputIdentifier;

  constructor(message: string, inputIdentifier: string) {
    super(message);
    this.name = 'InputValidationError';
    this.inputIdentifier = inputIdentifier;
  }
}

export function validateInput(
  inputIdentifier: string,
  inputValue: string,
  validationRules: ValidationRules,
) {
  const { required, minLength, maxLength, pattern } = validationRules;
  const trimmedInputValue = inputValue.trim();

  if (required && !trimmedInputValue) {
    throw new InputValidationError(`${required}`, inputIdentifier);
  }

  if (minLength && trimmedInputValue.length < minLength.value) {
    throw new InputValidationError(`${minLength.message}`, inputIdentifier);
  }

  if (maxLength && trimmedInputValue.length > maxLength.value) {
    throw new InputValidationError(`${maxLength.message}`, inputIdentifier);
  }

  if (pattern && !pattern.value.test(trimmedInputValue)) {
    throw new InputValidationError(`${pattern.message}`, inputIdentifier);
  }
}

export const nameInputValidationRules: ValidationRules = {
  required: 'This field is required.',
  minLength: {
    value: 3,
    message: 'Minimum length is 3.',
  },
  maxLength: {
    value: 50,
    message: 'Maximum length is 50.',
  },
};

export const emailInputValidationRules: ValidationRules = {
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
    message: 'Enter valid e-mail address.',
  },
};

export const messageInputValidationRules: ValidationRules = {
  required: 'This field is required.',
  minLength: {
    value: 10,
    message: 'Minimum length is 10.',
  },
  maxLength: {
    value: 3000,
    message: 'Maximum length is 3000.',
  },
};
