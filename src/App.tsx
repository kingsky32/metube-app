import Layout from '#components/templates/Layout';
import React from 'react';
import MainNavigator from './navigations';

const App = (): React.ReactElement => {
  return (
    <Layout>
      <MainNavigator />
    </Layout>
  );
};

export default App;
