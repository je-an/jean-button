define([ // jscs:ignore
    "DomElement",
    "DomUtil",
    "Inheritance",
    "TypeCheck",
    "Failure",
    "Merge",
    "css!button-css"
], function (
    DomElement,
    DomUtil,
    Inheritance,
    TypeCheck,
    Failure,
    Merge
) {
        /**
         * Basic button functionality 
         * @alias Button 
         * @constructor
         * @param {Object} options - options object
         * @param {String} options.id - id of the button
         * @param {String} options.name - name of the button
         * @param {Function} options.onButtonClick - Gets called, if button is clicked
         * @param {Boolean} [options.isHighlighted=false] - True if button stays highlighted after a click, false otherwise
         */
        var Button = function (options) {
            Inheritance.inheritConstructor(DomElement, this, Merge({ // jscs:ignore
                id: TypeCheck.isString(options.id) ? options.id : Failure.throwTypeError("options.id is not a string"),
                name: TypeCheck.isString(options.name) ? options.name : Failure.throwTypeError("options.name is not a string"),
                html: '<div id="' + options.id + '" class="jean-button">' + options.name + '</div>',
                onButtonClick: TypeCheck.isString(options.heading) ? options.heading : "Collapsible",
                isHighlighted: TypeCheck.isBoolean(options.isHighlighted) ? options.isHighlighted : false,
                isSelected: false
            }, TypeCheck.isDefined(options) ? options : {}));
            this.element.addEventListener("click", this._onButtonClick.bind(this));
            this.id = this.options.id;
            this._setState();
        };
        /** */
        Button.prototype._onButtonClick = function () {
            this.options.isSelected = !this.options.isSelected;
            this._setState();
            this.options.onButtonClick(this.options.id, this.options.isSelected);
        };
        /** */
        Button.prototype._setState = function () {
            var options = this.options;
            if (options.isHighlighted) {
                if (options.isSelected) {
                    this.element.classList.add("jean-button-selected");
                } else {
                    this.element.classList.remove("jean-button-selected");
                }
            }
        };
        return Button;
    });