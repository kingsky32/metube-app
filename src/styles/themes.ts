import { StyleProp, ViewStyle } from 'react-native';
import { DefaultTheme } from 'styled-components';

export const styles = {
  youtube: '#ff0000',
  horizontalDistance: 12,
};

export const defaultCardStyle: StyleProp<ViewStyle> = {
  backgroundColor: '#ffffff',
};

export default <{ dark: DefaultTheme; light: DefaultTheme }>{
  dark: {
    ...styles,
  },
  light: {
    ...styles,
  },
};
