const path = require('path');

module.exports = function webpackDevConfig(baseConfig) {
  return Object.assign({}, baseConfig, {
    mode: 'development',
    devServer: {
      open: true,
      port: 3000,
      contentBase: ['src/public', '.'].map(contentPath =>
        path.join(process.cwd(), contentPath)
      )
    }
  });
};
