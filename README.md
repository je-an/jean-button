## Description

Basic button functionality

## Support
AMD eco system. If there is no loader, Button is registered as a browser variable.

## Code Example
- Use it as browser variable
```js
 var button = new Button({
    id: "test-btn",
    name: "i am a button",
    isHighlightable: true,
    isHighlighted: true,
    onButtonClick: function (id, state) {
        console.log(id + " clicked with state: " + state);
    }
});
document.body.appendChild(button.element);
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
- **isHighlightable**: `Boolean` - `optional` - True if button stays highlighted after a click, false otherwise
- **isHighlighted**: `Boolean` - `optional` - True if button stays highlighted after a click, false otherwise
- **onButtonClick**: `Function` - `optional` - Gets called, if button is clicked


## Tests

- Open spec/spec-runner.html in browser to see the test cases.
- Host `example/index.html` and display it in your browser

## License

MIT