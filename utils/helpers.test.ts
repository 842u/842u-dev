import { createSlug, extendArray } from './helpers';

describe('createSlug', () => {
  it('should return type of string', () => {
    const text = 'mock text';

    const slug = createSlug(text);

    expect(typeof slug).toBe('string');
  });

  it('should return string without whitespaces', () => {
    const text = '  mock  text whitespaces ';

    const slug = createSlug(text);

    expect(slug).not.toContain(' ');
  });

  it('should return string without special characters', () => {
    const text = 'mock text @#$^&*()-+=';

    const slug = createSlug(text);

    expect(slug).toMatch(/[A-Za-z0-9\s-]/g);
  });

  it('should return characters in lower case', () => {
    const text = 'Mock Text UPPER';

    const slug = createSlug(text);

    expect(slug).not.toMatch(/[A-Z]/g);
  });
});

describe('extendArray', () => {
  it('should return array with same length if multiplier = 0', () => {
    const array = ['item', 'item', 'item'];
    const multiplier = 0;

    const extendedArray = extendArray(array, multiplier);

    expect(extendedArray).toHaveLength(array.length);
  });

  it('should return array with same length if multiplier = 1', () => {
    const array = ['item', 'item', 'item'];
    const multiplier = 1;

    const extendedArray = extendArray(array, multiplier);

    expect(extendedArray).toHaveLength(array.length);
  });

  it('should return array with same length if multiplier < 0', () => {
    const array = ['item', 'item', 'item'];
    const multiplier = -1;

    const extendedArray = extendArray(array, multiplier);

    expect(extendedArray).toHaveLength(array.length);
  });

  it('should return array with length * multiplier', () => {
    const array = ['item', 'item', 'item'];
    const multiplier = 3;

    const extendedArray = extendArray(array, multiplier);

    expect(extendedArray).toHaveLength(array.length * 3);
  });
});
