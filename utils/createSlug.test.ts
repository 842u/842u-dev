import { createSlug } from './createSlug';

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
