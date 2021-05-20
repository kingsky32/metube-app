module.exports = api => {
  api.cache(true);
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      ['styled-components', { ssr: true, displayName: true }],
      [
        '@babel/plugin-proposal-decorators',
        {
          legacy: true,
        },
      ],
      ['@babel/plugin-proposal-optional-chaining'],
      [
        'babel-plugin-root-import',
        {
          paths: [
            {
              rootPathSuffix: './src/apis',
              rootPathPrefix: '#apis/',
            },
            {
              rootPathSuffix: './src/assets',
              rootPathPrefix: '#assets/',
            },
            {
              rootPathSuffix: './src/common',
              rootPathPrefix: '#common/',
            },
            {
              rootPathSuffix: './src/components',
              rootPathPrefix: '#components/',
            },
            {
              rootPathSuffix: './src/data',
              rootPathPrefix: '#data/',
            },
            {
              rootPathSuffix: './src/hooks',
              rootPathPrefix: '#hooks/',
            },
            {
              rootPathSuffix: './src/navigations',
              rootPathPrefix: '#navigations/',
            },
            {
              rootPathSuffix: './src/pages',
              rootPathPrefix: '#pages/',
            },
            {
              rootPathSuffix: './src/styles',
              rootPathPrefix: '#styles/',
            },
            {
              rootPathSuffix: './src/utils',
              rootPathPrefix: '#utils/',
            },
            {
              rootPathSuffix: './src',
              rootPathPrefix: '#/',
            },
          ],
        },
      ],
    ],
  };
};
