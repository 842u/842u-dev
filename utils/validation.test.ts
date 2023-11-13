/* eslint  simple-import-sort/imports: 0 */

import { InputValidationError, validateInput } from './validation';
import { ValidationRules } from '@/types';

const mockErrorMessage = 'Mock error message';

describe('validateInput', () => {
  it('should throw if input is required but empty', () => {
    const inputValue = '';
    const mockValidationRules: ValidationRules = {
      required: mockErrorMessage,
    };

    expect(() =>
      validateInput('mock', inputValue, mockValidationRules),
    ).toThrow(InputValidationError);
  });

  it('should throw if input value is smaller than minLength', () => {
    const inputValue = 'a';
    const mockValidationRules: ValidationRules = {
      minLength: {
        value: 2,
        message: mockErrorMessage,
      },
    };

    expect(() =>
      validateInput('mock', inputValue, mockValidationRules),
    ).toThrow(InputValidationError);
  });

  it('should throw if input value is greater than maxLength', () => {
    const inputValue = 'aaaaaa';
    const mockValidationRules: ValidationRules = {
      maxLength: {
        value: 5,
        message: mockErrorMessage,
      },
    };

    expect(() =>
      validateInput('mock', inputValue, mockValidationRules),
    ).toThrow(InputValidationError);
  });

  it('should throw if input value does not match pattern', () => {
    const inputValue = '123';
    const mockValidationRules: ValidationRules = {
      pattern: {
        value: /[A-Z]/i,
        message: mockErrorMessage,
      },
    };

    expect(() =>
      validateInput('mock', inputValue, mockValidationRules),
    ).toThrow(InputValidationError);
  });
});
