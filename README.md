## Description

Basic button functionality

## Support
AMD eco system. If there is no loader, Button is registered as a browser variable.

## Code Example
- Use it as browser variable
```js
var btn = new Button({
    id: "test-btn",
    name: "i am a button",
    isSelected: false,
    onButtonClick: function (id) {
        console.log(id + " clicked");
    }
});
document.body.appendChild(btn.element);
```
- Use it with require.js
```js
require(["path/to/Button"], function(Button){
    // Work with Button
});
```
## Installation

`npm install jean-button --save --legacy-bundling`

## API Reference

**Options**

- **id**: `String` - `mandatory` - id of the button
- **name**: `String` - `mandatory` - name of the button
- **isSelected**: `Boolean` - `mandatory` - True if button stays highlighted after a click, false otherwise
- **onButtonClick**: `Function` - `mandatory` - Gets called, if button is clicked


## Tests

- Open spec/spec-runner.html in browser to see the test cases.
- Host `example/index.html` and display it in your browser

## License

MIT