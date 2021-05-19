import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Search from '#pages/search';
import SearchHeader from '#components/UI/organisms/layout/Header/SearchHeader';
import { defaultCardStyle } from '#styles/themes';

const AccountNavigator = (): React.ReactElement => {
  const Stack = React.useMemo(() => createStackNavigator(), []);
  return (
    <Stack.Navigator
      screenOptions={{ header: props => <SearchHeader {...props} />, cardStyle: defaultCardStyle }}
    >
      <Stack.Screen name='search' component={Search} />
    </Stack.Navigator>
  );
};

export default AccountNavigator;
