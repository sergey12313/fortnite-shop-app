import { NavigationProp, useNavigation } from '@react-navigation/native';

import { BottomTabNavigatorList } from '../Layout/AppLayout';

export const useAppNavigation = () => {
  return useNavigation<NavigationProp<BottomTabNavigatorList>>();
};
