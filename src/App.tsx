import React from 'react';
import Layout from '#components/templates/Layout';
import RootNavigator from './navigations';

const App = (): React.ReactElement => {
  return (
    <Layout>
      <RootNavigator />
    </Layout>
  );
};

export default App;
