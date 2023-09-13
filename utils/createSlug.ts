export function createSlug(text: string) {
  const segments = text
    .trim()
    .replace(/[^A-Za-z0-9\s]/g, ' ')
    .split(' ')
    .filter((part) => !!part);

  const lowerCaseParts = segments.map((part) => part.toLocaleLowerCase());

  const slug = lowerCaseParts.join('-');

  return slug;
}
