import React from 'react';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { defaultCardStyle } from '#styles/themes';
import Search from '#pages/search';
import SearchHeader from '#components/UI/organisms/layout/Header/SearchHeader';
import SearchResult from '#pages/search/result';

export type SearchParamList = {
  Search: { query: string };
  SearchResult: { query: string };
};

export type SearchRouteProp = RouteProp<SearchParamList, 'Search'>;

export type SearchNavigationProp = StackNavigationProp<SearchParamList, 'Search'>;

export type SearchNavigatorProps = {
  route: SearchRouteProp;
  navigation: SearchNavigationProp;
};

const Stack = createStackNavigator<SearchParamList>();

const SearchNavigator = (): React.ReactElement => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: props => <SearchHeader {...props} />,
        cardStyle: defaultCardStyle,
      }}
    >
      <Stack.Screen name='Search' component={Search} />
      <Stack.Screen name='SearchResult' component={SearchResult} />
    </Stack.Navigator>
  );
};

export default SearchNavigator;
