require(["Button", "css!bootstrap"], function (Button) {
    console.log("Hello world");
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
});



