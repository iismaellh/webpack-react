Webpack 4 + React Boilerplate
===========

> Webpack 4 + React boilerplate with Babel, SASS and lodash on board.

## Requirements
Latest version of node.js. If you don't like lodash, remove it. :p

## Download
Download in current directory
```sh
$ curl -L -o master.zip https://github.com/randomtu/webpack-react/archive/master.zip && unzip master.zip && rm master.zip && mv ./webpack-react-master/{.,}* ./ && rm -r ./webpack-react-master
```

## Setup
Install dependencies
```sh
$ npm install
```

## Development
Run the local webpack-dev-server with livereload and autocompile on [http://localhost:8080/](http://localhost:8080/)
```sh
$ npm run dev
```
## Deployment
Build the current application
```sh
$ npm run build
```

## Credits
Christoph von Gellhorn: https://github.com/cvgellhorn/webpack-boilerplate
Maximilian Schwarzmüller: https://github.com/mschwarzmueller

## Resources

## [webpack](https://webpack.js.org/)
If you're not familiar with webpack, the [webpack-dev-server](https://webpack.js.org/configuration/dev-server/) will serve the static files in your build folder and watch your source files for changes.
When changes are made the bundle will be recompiled. This modified bundle is served from memory at the relative path specified in publicPath.
