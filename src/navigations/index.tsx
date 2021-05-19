import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeNavigator from './home';
import Header from '#components/UI/organisms/layout/Header';

const MainNavigator = (): React.ReactElement => {
  const Stack = React.useMemo(() => createStackNavigator(), []);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='home' children={HomeNavigator} options={{ header: () => <Header /> }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
