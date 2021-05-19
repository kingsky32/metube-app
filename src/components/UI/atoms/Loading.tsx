import React from 'react';
import { ActivityIndicator, ActivityIndicatorProps, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  indicatorStyle: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});

const Loading = ({ style, ...props }: ActivityIndicatorProps): React.ReactElement => {
  return <ActivityIndicator style={[style, styles.indicatorStyle]} {...props} />;
};

export default Loading;
