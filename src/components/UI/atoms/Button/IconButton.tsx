import React from 'react';
import { Animated, StyleSheet, TouchableOpacityProps, GestureResponderEvent } from 'react-native';
import styled from 'styled-components/native';

type PropertyFunction<T> = () => T;

interface IconButtonProps extends TouchableOpacityProps {
  icon:
    | React.ReactNode
    | React.ReactElement
    | PropertyFunction<React.ReactNode | React.ReactElement>;
  size?: number;
}

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#00000015',
  },
});

const Container = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const IconButton = ({
  icon,
  size,
  style,
  onPressIn,
  onPressOut,
  ...props
}: IconButtonProps): React.ReactElement => {
  const [animated] = React.useState(new Animated.Value(0));

  const handlePressIn = (props: GestureResponderEvent): void => {
    if (typeof onPressIn === 'function') {
      onPressIn(props);
    }
    Animated.timing(animated, { toValue: 1, duration: 150, useNativeDriver: true }).start();
  };

  const handlePressOut = (props: GestureResponderEvent): void => {
    if (typeof onPressOut === 'function') {
      onPressOut(props);
    }
    Animated.timing(animated, { toValue: 0, duration: 100, useNativeDriver: true }).start();
  };

  return (
    <Container
      {...props}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      activeOpacity={1}
      style={[{ width: size, height: size, borderRadius: size }, style]}
    >
      {typeof icon === 'function' ? icon() : icon}
      <Animated.View
        style={[
          styles.background,
          {
            width: size,
            height: size,
            borderRadius: size,
            opacity: animated,
          },
        ]}
      />
    </Container>
  );
};

IconButton.defaultProps = {
  size: 30,
};

export default IconButton;
