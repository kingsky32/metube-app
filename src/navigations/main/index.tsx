import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { RouteProp } from '@react-navigation/native';
import Home from '#pages/home';
import Explore from '#pages/explore';
import Subscriptions from '#pages/subscriptions';
import Library from '#pages/library';
import MainHeader from '#components/UI/organisms/layout/Header/MainHeader';
import { defaultCardStyle, styles as themeStyles } from '#styles/themes';
import IconButton from '#components/UI/atoms/Button/IconButton';
import Notifications from '#pages/notifications';
import AccountChannel from '#pages/account/channel';

export type MainTabParamList = {
  Home: undefined;
  Explore: undefined;
  Subscriptions: undefined;
  Library: undefined;
};

export type MainTabRouteProp<T extends keyof MainTabParamList> = RouteProp<MainTabParamList, T>;

export type MainTabNavigationProp<T extends keyof MainTabParamList> = StackNavigationProp<
  MainTabParamList,
  T
>;

export type MainTabTNavigatorProps<T extends keyof MainTabParamList> = {
  route: MainTabRouteProp<T>;
  navigation: MainTabNavigationProp<T>;
};

const styles = StyleSheet.create({
  centerButton: {
    height: 45,
  },
});

const TabNavigator = (): React.ReactElement => {
  const Tab = React.useMemo(() => createBottomTabNavigator(), []);
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: { borderTopColor: '#eeeeee', borderTopWidth: 1 },
        activeTintColor: '#030303',
      }}
      sceneContainerStyle={defaultCardStyle}
    >
      <Tab.Screen
        name='Home'
        component={Home}
        options={{
          title: 'Home',
          tabBarIcon: () => <Icon name='home' size={28} color='#030303' />,
        }}
      />
      <Tab.Screen
        name='Explore'
        component={Explore}
        options={{
          title: 'Explore',
          tabBarIcon: () => <Icon name='explore' size={28} color='#030303' />,
        }}
      />
      <Tab.Screen
        name='Button'
        component={Home}
        options={{
          tabBarButton: ({ style }) => {
            return (
              <View style={[style, styles.centerButton]}>
                <IconButton
                  icon={<Icon name='add-circle-outline' size={36} color='#030303' />}
                  size={45}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name='Subscriptions'
        component={Subscriptions}
        options={{
          title: 'Subscriptions',
          tabBarIcon: () => <Icon name='subscriptions' size={28} color='#030303' />,
        }}
      />
      <Tab.Screen
        name='Library'
        component={Library}
        options={{
          title: 'Library',
          tabBarIcon: () => <Icon name='video-library' size={28} color='#030303' />,
        }}
      />
    </Tab.Navigator>
  );
};

const MainNavigator = (): React.ReactElement => {
  const Stack = React.useMemo(() => createStackNavigator(), []);
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerLeftContainerStyle: { paddingLeft: themeStyles.horizontalDistance - 5 },
        headerLeft: ({ tintColor, ...props }) => {
          return (
            <IconButton
              icon={<Icon name='chevron-left' size={32} color={tintColor} />}
              size={35}
              {...props}
            />
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
      <Stack.Screen
        name='Tab'
        component={TabNavigator}
        options={{ header: props => <MainHeader {...props} /> }}
      />
      <Stack.Screen
        name='Notifications'
        component={Notifications}
        options={{ headerShown: true, title: 'Notificaitons' }}
      />
      <Stack.Screen
        name='Channel'
        component={AccountChannel}
        options={{ headerShown: true, title: 'Channel' }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
