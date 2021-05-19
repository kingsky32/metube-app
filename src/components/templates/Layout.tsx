import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import themes from '#/styles/themes';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps): React.ReactElement => {
  const isDarkMode = useColorScheme() === 'dark';
  const theme: DefaultTheme = isDarkMode ? themes.dark : themes.light;
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        {children}
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default Layout;
