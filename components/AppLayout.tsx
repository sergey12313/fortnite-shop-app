import { AntDesign } from '@expo/vector-icons';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { NavigationContainer, NavigatorScreenParams, RouteProp } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FC } from 'react';
import { RootSiblingParent } from 'react-native-root-siblings';
import Toast from 'react-native-toast-message';

import { useAppContext } from '../context/AppContext';
import { CartScreen } from '../screens/CartPage';
import { CatalogItemScreen } from '../screens/CatalogItemScreen';
import { CatalogScreen } from '../screens/CatalogScreen';
import { SettingsScreen } from '../screens/SettingsScreen';

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
    tabBarIcon: ({ focused, color, size }) => {
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

      return <AntDesign name={iconName} size={size} color={color} />;
    },
    tabBarActiveTintColor: 'tomato',
    tabBarInactiveTintColor: 'gray',
    // headerShown: route.params.,
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

export const AppLayout: FC = () => {
  const { cartListCount } = useAppContext();

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Tab.Screen
          name="Cart"
          component={CartScreen}
          options={{ title: 'Корзина', tabBarBadge: cartListCount }}
        />
        <Tab.Screen name="Settings" component={SettingsScreen} options={{ title: 'Настройки' }} />
      </Tab.Navigator>
      <Toast />
    </NavigationContainer>
  );
};
