module.exports = {
  entry: './dummy.jsx',
  mode: 'development',
  output: {
    filename: 'dummy.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          // loader: 'babel',
          // loader: 'babel-loader',
          loader: require.resolve('babel-loader'),
          options: {
            presets: [
              'babel-preset-react',
              'babel-preset-es2015',
            ],
            // presets: ['react', 'es2015'],
            // presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};
