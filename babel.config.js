module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
      [
        'module-resolver',
        {
          alias: {
            '@shared': './src/shared',
            '@entities': './src/entities',
            '@pages': './src/pages',
            '@features': './src/features',
          },
        },
      ],
    ],
  };
};
