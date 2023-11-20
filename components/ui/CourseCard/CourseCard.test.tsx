import { render, screen } from '@testing-library/react';

import { udemyJavaScript } from '@/data/courses/udemy-javascript';

import { CourseCard } from './CourseCard';

describe('CourseCard', () => {
  it('should render course certificate image', () => {
    const imageAltText = /certificate/i;

    render(<CourseCard course={udemyJavaScript} />);
    const image = screen.getByAltText(imageAltText);

    expect(image).toBeInTheDocument();
  });

  it('should render name of the course', () => {
    const courseName = udemyJavaScript.name;

    render(<CourseCard course={udemyJavaScript} />);
    const courseNameElement = screen.getByText(courseName);

    expect(courseNameElement).toBeInTheDocument();
  });

  it('should render course completion date', () => {
    const courseDate = udemyJavaScript.date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: '2-digit',
    });

    render(<CourseCard course={udemyJavaScript} />);
    const courseDateElement = screen.getByText(courseDate);

    expect(courseDateElement).toBeInTheDocument();
  });

  it('should render course hours length', () => {
    const courseLength = new RegExp(`${udemyJavaScript.hoursLength}`, 'i');

    render(<CourseCard course={udemyJavaScript} />);
    const courseLengthElement = screen.getByText(courseLength);

    expect(courseLengthElement).toBeInTheDocument();
  });

  it('should render link to certificate verification', () => {
    render(<CourseCard course={udemyJavaScript} />);
    const link = screen.getByRole('link', { name: /verify/i });

    expect(link).toBeInTheDocument();
  });
});
