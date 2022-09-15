import { AntDesign } from '@expo/vector-icons';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { NavigationContainer, NavigatorScreenParams, RouteProp } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FC } from 'react';

import { useAppContext } from '../hooks/useAppContext';
import { CartScreen } from '../pages/CartScreen';
import { CatalogItemScreen } from '../pages/CatalogItemScreen';
import { CatalogScreen } from '../pages/CatalogScreen';
import { SettingsScreen } from '../pages/SettingsScreen';

export type BottomTabNavigatorList = {
  Home: NavigatorScreenParams<StackNavigatorList>;
  Cart: undefined;
  Settings: undefined;
};
export type StackNavigatorList = {
  Catalog: undefined;
  CatalogItem: { title: string; id: string };
};

const screenOptions: (props: {
  route: RouteProp<BottomTabNavigatorList>;
  navigation: any;
}) => BottomTabNavigationOptions = ({ route }) => {
  return {
    tabBarIcon: ({ color }) => {
      let iconName;
      switch (route.name) {
        case 'Home': {
          iconName = 'home';
          break;
        }
        case 'Cart': {
          iconName = 'shoppingcart';
          break;
        }
        case 'Settings': {
          iconName = 'setting';
        }
      }

      return <AntDesign name={iconName} size={32} color={color} />;
    },
    tabBarActiveTintColor: 'tomato',
    tabBarInactiveTintColor: 'gray',
  };
};

const Tab = createBottomTabNavigator<BottomTabNavigatorList>();
const Stack = createNativeStackNavigator<StackNavigatorList>();

const Home = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Catalog" options={{ title: 'Каталог' }} component={CatalogScreen} />
      <Stack.Screen
        name="CatalogItem"
        component={CatalogItemScreen}
        options={({ route }) => ({ title: route.params.title })}
      />
    </Stack.Navigator>
  );
};

export const Router: FC = () => {
  const { cartListCount } = useAppContext();

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Tab.Screen
          name="Cart"
          component={CartScreen}
          options={{ title: 'Корзина', tabBarBadge: cartListCount > 0 ? cartListCount : null }}
        />
        <Tab.Screen name="Settings" component={SettingsScreen} options={{ title: 'Настройки' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
