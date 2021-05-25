import React from 'react';
import { StackHeaderProps } from '@react-navigation/stack';
import styled from 'styled-components/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TextInput } from 'react-native';
import { Scene } from '@react-navigation/stack/lib/typescript/src/types';
import IconButton from '#components/UI/atoms/Button/IconButton';
import Input from '#components/UI/atoms/Input';
import { SearchRouteProp } from '#navigations/search';

export interface SearchHeaderProps extends StackHeaderProps {
  scene: Scene<SearchRouteProp>;
}

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

const SearchHeader = ({ navigation, scene }: SearchHeaderProps): React.ReactElement => {
  const insets = useSafeAreaInsets();
  const inputRef = React.useRef<TextInput>(null);
  const { params } = scene.route;
  const initialKeyword: string = params?.keyword;
  const [keyword, setKeyword] = React.useState<string>(initialKeyword ?? '');
  const isSearch = scene.route.name === 'Search';

  const handleSubmit = () => {
    navigation.push('SearchResult', { keyword });
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
          value={keyword}
          onChangeText={setKeyword}
          onSubmitEditing={handleSubmit}
        />
        <IconButton icon={<Icon name='mic-none' size={24} />} size={34} />
      </Container>
    </Wrapper>
  );
};

export default SearchHeader;
