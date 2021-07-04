module.exports = function (api) {
  if (api.env('production')) {
    return {
      presets: ['module:metro-react-native-babel-preset'],
      plugins: [
        ['transform-remove-console'],
        [
          'module-resolver',
          {
            alias: {
              assets: './src/assets',
            },
          },
        ],
      ],
    };
  }

  return {
    presets: ['module:metro-react-native-babel-preset'],
  };
};
