import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { FC } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ToastProvider } from 'react-native-toast-notifications';

import { AppLayout } from './Layout/AppLayout';
import { AppContextProvider } from './context/AppContext';

const queryClient = new QueryClient();
const App: FC = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AppContextProvider>
        <QueryClientProvider client={queryClient}>
          <ToastProvider placement="top" offset={60} duration={1000}>
            <AppLayout />
          </ToastProvider>
        </QueryClientProvider>
      </AppContextProvider>
    </GestureHandlerRootView>
  );
};

export default App;
