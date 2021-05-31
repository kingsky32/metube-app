import React from 'react';
import { TextInput } from 'react-native';
import { StackHeaderProps } from '@react-navigation/stack';
import styled from 'styled-components/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { RouteProp } from '@react-navigation/native';
import IconButton from '#components/UI/atoms/Button/IconButton';
import Input from '#components/UI/atoms/Input';

const SearchInput = styled(Input)`
  flex: 1;
`;

const Wrapper = styled.View`
  background-color: #ffffff;
  padding: 0 ${({ theme }) => theme.horizontalDistance - 5}px;
  border-bottom-width: 1px;
  border-bottom-color: #eeeeee;
`;

const Container = styled.View`
  flex-flow: row nowrap;
  height: 45px;
  align-items: center;
  justify-content: space-between;
`;

const SearchHeader = ({ navigation, scene }: StackHeaderProps): React.ReactElement => {
  const insets = useSafeAreaInsets();
  const inputRef = React.useRef<TextInput>(null);
  const { params } = scene.route as RouteProp<{ params: { query: string } }, 'params'>;
  const initialQuery: string = params?.query;
  const [query, setQuery] = React.useState<string>(initialQuery ?? '');
  const isSearch = scene.route.name === 'Search';

  const handleSubmit = () => {
    if (isSearch) {
      navigation.replace('SearchResult', { query });
    } else {
      navigation.push('SearchResult', { query });
    }
  };

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      if (isSearch) {
        inputRef.current?.focus();
      }
    });
    return unsubscribe;
  }, []);

  return (
    <Wrapper style={{ paddingTop: insets.top }}>
      <Container>
        <IconButton
          icon={<Icon name={isSearch ? 'close' : 'chevron-left'} size={24} />}
          size={34}
          onPress={navigation.goBack}
        />
        <SearchInput
          ref={inputRef}
          placeholder='Search MeTube'
          returnKeyType='search'
          value={query}
          onChangeText={setQuery}
          onSubmitEditing={handleSubmit}
        />
        <IconButton icon={<Icon name='mic-none' size={24} />} size={34} />
      </Container>
    </Wrapper>
  );
};

export default SearchHeader;
