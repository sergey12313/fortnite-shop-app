import React, { FC, PropsWithChildren } from 'react';
import { ToastProvider } from 'react-native-toast-notifications';

export const WithToasts: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ToastProvider placement="top" offset={60} duration={1000}>
      {children}
    </ToastProvider>
  );
};
