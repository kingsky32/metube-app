import React from 'react';
import { StackHeaderProps } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Logo from '#components/UI/atoms/Logo';
import IconButton from '#components/UI/atoms/Button/IconButton';

const styles = StyleSheet.create({
  buttonDistance: {
    marginRight: 5,
  },
});

const Wrapper = styled.View`
  background-color: #ffffff;
  padding: 0 ${({ theme }) => theme.horizontalDistance}px;
  border-bottom-width: 1px;
  border-bottom-color: #eeeeee;
`;

const Container = styled.View`
  flex-flow: row nowrap;
  height: 48px;
  align-items: center;
  justify-content: space-between;
`;

const ButtonContainer = styled.View`
  flex-flow: row nowrap;
`;

const MainHeader = ({ navigation }: StackHeaderProps): React.ReactElement => {
  const insets = useSafeAreaInsets();
  return (
    <Wrapper style={{ paddingTop: insets.top }}>
      <Container>
        <Logo />
        <ButtonContainer>
          <IconButton
            icon={<Icon name='cast' size={20} />}
            style={styles.buttonDistance}
            size={34}
          />
          <IconButton
            icon={<Icon name='notifications-none' size={24} />}
            style={styles.buttonDistance}
            size={34}
            onPress={() => navigation.navigate('notifications')}
          />
          <IconButton
            icon={<Icon name='search' size={24} />}
            style={styles.buttonDistance}
            size={34}
            onPress={() => navigation.navigate('search')}
          />
          <IconButton
            icon={<Icon name='account-circle' size={24} />}
            size={34}
            onPress={() => navigation.navigate('account')}
          />
        </ButtonContainer>
      </Container>
    </Wrapper>
  );
};

export default MainHeader;
