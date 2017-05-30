# Webpack loader for Surplus applications

## Installation

`npm install --save-dev surplus-loader`

## Usage

Here's an example webpack.config.js that also uses typescript.

```javascript
'use strict';

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

## Options

None yet.

Note: sourcemap support currently broken :(.  To be fixed soon.