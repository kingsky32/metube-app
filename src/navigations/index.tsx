import React from 'react';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { NavigationContainer, RouteProp } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconButton from '#components/UI/atoms/Button/IconButton';
import { defaultCardStyle, styles } from '#styles/themes';
import MainNavigator from './main';
import SearchNavigator from './search';
import AccountNavigator from './account';
import VideoDetail from '#pages/video/detail';

export type RootParamList = {
  Main: undefined;
  Search: { query: string };
  Account: { acountId: string };
  VideoDetail: { videoId: string };
};

export type RootRouteProp<T extends keyof RootParamList> = RouteProp<RootParamList, T>;

export type RootNavigationProp<T extends keyof RootParamList> = StackNavigationProp<
  RootParamList,
  T
>;

export type RootNavigatorProps<T extends keyof RootParamList> = {
  route: RootRouteProp<T>;
  navigation: RootNavigationProp<T>;
};

const RootNavigator = (): React.ReactElement => {
  const Stack = React.useMemo(() => createStackNavigator(), []);
  return (
    <NavigationContainer>
      <Stack.Navigator
        mode='modal'
        screenOptions={{
          headerShown: false,
          headerBackTitleVisible: false,
          headerLeftContainerStyle: { paddingLeft: styles.horizontalDistance - 5 },
          headerLeft: ({ tintColor, ...props }) => {
            return (
              <IconButton icon={<Icon name='close' size={24} color={tintColor} />} {...props} />
            );
          },
          headerStyle: {
            shadowOpacity: 0,
            borderBottomColor: '#eeeeee',
            borderBottomWidth: 1,
          },
          headerTitleAlign: 'left',
          headerTitleStyle: {
            marginLeft: -30,
            fontWeight: '400',
          },
          cardStyle: defaultCardStyle,
        }}
      >
        <Stack.Screen name='Main' component={MainNavigator} />
        <Stack.Screen name='Search' component={SearchNavigator} />
        <Stack.Screen
          name='Account'
          component={AccountNavigator}
          options={{ headerShown: true, title: 'Account' }}
        />
        <Stack.Screen name='VideoDetail' component={VideoDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
