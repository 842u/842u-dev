import { useTheme } from 'next-themes';
import { PulseLoader } from 'react-spinners';

type SubmitLoaderProps = {
  isSubmitting: boolean;
  text: string;
};

export function SubmitLoader({ isSubmitting, text }: SubmitLoaderProps) {
  const { theme } = useTheme();

  return (
    <span>
      {isSubmitting ? (
        <PulseLoader loading color={theme === 'dark' ? '#6b6b6b' : '#c0ac8c'} />
      ) : (
        text
      )}
    </span>
  );
}
