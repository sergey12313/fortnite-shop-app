import compose from 'compose-function';
import { FC, PropsWithChildren } from 'react';

import { WithAppContext } from './WithAppContext';
import { WithGestureHandler } from './WithGestureHandler';
import { WithQuery } from './WithQuery';
import { WithToasts } from './WithToastProvider';

export const WithProviders: FC<PropsWithChildren> = compose(
  WithGestureHandler,
  WithAppContext,
  WithToasts,
  WithQuery
);
