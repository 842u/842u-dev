export function createSlug(text: string) {
  const parts = text
    .trim()
    .replace(/[^A-Za-z0-9\s]/g, ' ')
    .split(' ')
    .filter((part) => !!part);

  const lowerCaseParts = parts.map((part) => part.toLocaleLowerCase());

  const slug = lowerCaseParts.join('-');

  return slug;
}
