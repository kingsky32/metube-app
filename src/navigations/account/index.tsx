import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Account from '#pages/account';
import { defaultCardStyle } from '#styles/themes';

const SearchNavigator = (): React.ReactElement => {
  const Stack = React.useMemo(() => createStackNavigator(), []);
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, cardStyle: defaultCardStyle }}>
      <Stack.Screen name='account' component={Account} />
    </Stack.Navigator>
  );
};

export default SearchNavigator;
