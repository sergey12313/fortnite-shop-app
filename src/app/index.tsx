import { FC } from 'react';

import { Router } from '../pages';
import { WithProviders } from './providers';

export const App: FC = () => {
  return (
    <WithProviders>
      <Router />
    </WithProviders>
  );
};
