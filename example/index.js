require(["Button", "css!bootstrap"], function (Button) {
    console.log("Hello world");
    var button = new Button({
        id: "test-btn",
        name: "i am a button",
        isHighlighted: false,
        onButtonClick: function (id) {
            console.log(id + " clicked");
        }
    });
    document.body.appendChild(button.element);
});