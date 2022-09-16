import compose from 'compose-function';
import { FC, PropsWithChildren } from 'react';

import { AppContextProvider } from './AppContextProvider';
import { GestureHandlerProvider } from './GestureHandlerProvider';
import { QueryProvider } from './QueryProvider';
import { ReduxProvider } from './ReduxProvider';
import { ToastProvider } from './ToastProvider';

export const WithProviders: FC<PropsWithChildren> = ({ children }) => {
  return (
    <GestureHandlerProvider>
      <ReduxProvider>
        <AppContextProvider>
          <ToastProvider>
            <QueryProvider>{children}</QueryProvider>
          </ToastProvider>
        </AppContextProvider>
      </ReduxProvider>
    </GestureHandlerProvider>
  );
};
