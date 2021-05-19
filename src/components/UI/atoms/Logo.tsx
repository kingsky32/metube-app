import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ViewProps } from 'react-native';
import { styles } from '#styles/themes';

const Container = styled.View`
  flex-flow: row nowrap;
  align-items: center;
`;

const Text = styled.Text`
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.5px;
  margin-left: 3px;
`;

const Logo = (props: ViewProps): React.ReactElement => {
  return (
    <Container {...props}>
      <Icon name='youtube-play' size={28} color={styles.youtube} />
      <Text>Metube</Text>
    </Container>
  );
};

export default Logo;
