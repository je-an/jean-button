## Description

Basic button functionality

## Support
Supports both CommonJS and AMD eco system. If there is no loader, Button is registered as a browser variable.

## Code Example
- Use it as browser variable
```js
var obj = new Button();
```
- Use it with require.js
```js
require(["path/to/Button"], function(Button){
    // Work with Button
});
```
- Use it with node.js
```js
var Button = require("jean-button");
```
## Installation

`npm install jean-button --save --legacy-bundling`

## API Reference

TBD

## Tests

- Open spec/spec-runner.html in browser to see the test cases.

## License

MIT