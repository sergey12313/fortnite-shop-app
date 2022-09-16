import React, { FC, PropsWithChildren } from 'react';
import { ToastProvider as _ToastProvider } from 'react-native-toast-notifications';

export const ToastProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <_ToastProvider placement="top" offset={60} duration={1000}>
      {children}
    </_ToastProvider>
  );
};
