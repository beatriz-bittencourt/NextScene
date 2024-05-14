import React, { ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';

interface ProvidersProps {
  children: ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider defaultTheme='system' attribute='class'> {/*CLASS AQUI* */}
      <div className='text-gray-900 dark:text-gray-300 dark:bg-black-100 min-h-screen select-none transition-colors duration-300'>
        {children}
      </div>
    </ThemeProvider>
  );
}
