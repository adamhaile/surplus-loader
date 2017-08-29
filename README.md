# Webpack loader for Surplus applications

## Installation

```sh
> npm install --save-dev surplus-loader
```

## Usage

```javascript
// webpack.config.js
...
module: {
    rules: [
        // if just using javascript
        { test: /\.jsx$/, loader: 'surplus-loader' },
        // if using with typescript
        { test: /\.tsx?$/, loader: 'surplus-loader!ts-loader' },
    ]
}
...
```
Here's an example of an entire webpack.config.js that uses typescript.

```javascript
// webpack.config.js
module.exports = {
    entry: './src/main.ts',
    output: {
        filename: './dist/main.js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: 'surplus-loader!ts-loader' },
        ]
    }
};
```

Note:
1. surplus-loader runs *after* typescript, so that it's just compiling Javascript, not Typescript (surplus-preprocessor doesn't understand typescript).  
2. For the JSX to make it through typescript uncompiled, you must specify `"jsx": "preserve"` in your tsconfig.json.

