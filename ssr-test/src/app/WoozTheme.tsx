'use client';

import React from 'react';
import { ThemeProvider } from '@woozdesign/ui';
import '@woozdesign/ui/styles.css';

export const RootStyleRegistry = ({ children }: React.PropsWithChildren) => {
  return (
    <ThemeProvider appearance="dark" accentColor={'blue'} radius={'full'}>
      {children}
    </ThemeProvider>
  );
};
