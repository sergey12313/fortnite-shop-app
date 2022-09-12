import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { FC } from 'react';

import { AppLayout } from './Layout/AppLayout';
import { AppContextProvider } from './context/AppContext';

const queryClient = new QueryClient();
const App: FC = () => {
  return (
    <AppContextProvider>
      <QueryClientProvider client={queryClient}>
        <AppLayout />
      </QueryClientProvider>
    </AppContextProvider>
  );
};

export default App;
