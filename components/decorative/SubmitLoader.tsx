import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { PulseLoader } from 'react-spinners';

type SubmitLoaderProps = {
  isSubmitting: boolean;
  text: string;
};

export function SubmitLoader({ isSubmitting, text }: SubmitLoaderProps) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <span>
      {isSubmitting && mounted ? (
        <PulseLoader loading color={theme === 'dark' ? '#6b6b6b' : '#c0ac8c'} />
      ) : (
        text
      )}
    </span>
  );
}
