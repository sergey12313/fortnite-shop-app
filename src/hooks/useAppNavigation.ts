import { BottomTabNavigatorList } from '@pages/*';
import { NavigationProp, useNavigation } from '@react-navigation/native';

export const useAppNavigation = () => {
  return useNavigation<NavigationProp<BottomTabNavigatorList>>();
};
