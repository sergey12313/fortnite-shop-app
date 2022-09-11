import { FC } from 'react';

import { AppLayout } from './components/AppLayout';
import { AppContext, AppContextProvider } from './context/AppContext';

const App: FC = () => {
  return (
    <AppContextProvider>
      <AppLayout />
    </AppContextProvider>
  );
};

export default App;
