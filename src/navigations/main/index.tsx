import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Home from '#pages/home';
import Explore from '#pages/explore';
import Subscriptions from '#pages/subscriptions';
import Library from '#pages/library';
import MainHeader from '#components/UI/organisms/layout/Header/MainHeader';
import { defaultCardStyle } from '#styles/themes';
import IconButton from '#components/UI/atoms/Button/IconButton';

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
        name='home'
        component={Home}
        options={{
          title: 'Home',
          tabBarIcon: () => <Icon name='home' size={28} color='#030303' />,
        }}
      />
      <Tab.Screen
        name='explore'
        component={Explore}
        options={{
          title: 'Explore',
          tabBarIcon: () => <Icon name='explore' size={28} color='#030303' />,
        }}
      />
      <Tab.Screen
        name='button'
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
        name='subscriptions'
        component={Subscriptions}
        options={{
          title: 'Subscriptions',
          tabBarIcon: () => <Icon name='subscriptions' size={28} color='#030303' />,
        }}
      />
      <Tab.Screen
        name='library'
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
        header: props => <MainHeader {...props} />,
        cardStyle: defaultCardStyle,
      }}
    >
      <Stack.Screen name='tab' component={TabNavigator} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
