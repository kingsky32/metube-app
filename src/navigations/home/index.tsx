import React from 'react';
import Home from '#pages/home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Explore from '#pages/explore';
import Subscriptions from '#pages/subscriptions';
import Library from '#pages/library';

const HomeNavigator = (): React.ReactElement => {
  const Tab = React.useMemo(() => createBottomTabNavigator(), []);
  return (
    <Tab.Navigator>
      <Tab.Screen name='home' children={Home} options={{ title: 'Home' }} />
      <Tab.Screen name='explore' children={Explore} options={{ title: 'Explore' }} />
      <Tab.Screen
        name='subscriptions'
        children={Subscriptions}
        options={{ title: 'Subscriptions' }}
      />
      <Tab.Screen name='library' children={Library} options={{ title: 'Library' }} />
    </Tab.Navigator>
  );
};

export default HomeNavigator;
