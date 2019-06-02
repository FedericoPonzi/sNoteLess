const path = require('path');
module.exports =
{
  entry: "./src/index.tsx",
  output: {
      filename: "bundle.js",
      path: __dirname + "/dist",
      publicPath: "/dist/",
  },
  devServer: {
    port: 3000
  },
  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  resolve: {
      // Add '.ts' and '.tsx' as resolvable extensions.
      extensions: [".ts", ".tsx", ".js", ".json"]
  },

  module: {
      rules: [
          // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
          { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

          // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
          { enforce: "pre", test: /\.js$/,                "exclude": /node_modules/,
          loader: "source-map-loader" }
      ]
  },

  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  externals: {
      "react": "React",
      "react-dom": "ReactDOM"
  }
};
/*
module.exports =


{
  "mode": "development",
  "entry": "./src/index.tsx",
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.min.js'
  },
  "devtool": "source-map",
  "module": {
      "rules": [
          {
              "enforce": "pre",
              "test": /\.(js|jsx)$/,
              "exclude": /node_modules/,
              "use": "eslint-loader"
          },
          {
              "test": /\.tsx?$/,
              "exclude": /node_modules/,
              "use": {
                "loader": 'awesome-typescript-loader',
                  "options": {
                      "transpileOnly": true
                  }
              }
          }
      ]
  }
}
/*
                  "loader": "ts-loader",
module.exports = {
  entry: './src/index.tsx',
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.min.js'
  },
  module: {
    rules: [
      { 
        test: /\.tsx?$/, 
        loader: 'awesome-typescript-loader'
      }
    ]
  }
}*/