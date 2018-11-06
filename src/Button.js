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
         * @param {Boolean} options.isSelected - True if button shall be selected, false otherwise
         * @param {Function} options.onButtonClick - Gets called, if button is clicked
         */
        var Button = function (options) {
            Inheritance.inheritConstructor(DomElement, this, Merge({ // jscs:ignore
                id: TypeCheck.isString(options.id) ? options.id : Failure.throwTypeError("options.id is not a string"),
                name: TypeCheck.isString(options.name) ? options.name : Failure.throwTypeError("options.name is not a string"),
                html: '<div id="' + options.id + '" class="jean-button">' + options.name + '</div>',
                onButtonClick: TypeCheck.isString(options.heading) ? options.heading : "Collapsible",
                isSelected: TypeCheck.isBoolean(options.isSelected) ? options.isSelected : false,
            }, TypeCheck.isDefined(options) ? options : {}));
            this.element.addEventListener("click", this._onButtonClick.bind(this));
            this.id = this.options.id;
            this._setState();
        };
        /** @enum */
        Button.selectType = Button.prototype.selectType = {
            SELECTED: "selected",
            DESELECTED: "deselected"
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
            if (options.isSelected) {
                this.element.classList.add("jean-button-selected");
            } else {
                this.element.classList.remove("jean-button-selected");
            }
        };
        /** */
        Button.prototype.select = function () {
            this.options.isSelected = true;
            this._setState();
        };
        /** */
        Button.prototype.deselect = function () {
            this.options.isSelected = false;
            this._setState();
        };
        return Button;
    });