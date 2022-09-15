import { FC, PropsWithChildren } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export const WithGestureHandler: FC<PropsWithChildren> = ({ children }) => {
  return <GestureHandlerRootView style={{ flex: 1 }}>{children}</GestureHandlerRootView>;
};
