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
     * @param {Boolean=false} options.isHighlightable - True if button shall stay highlighted after a click, false otherwise
     * @param {Boolean=false} options.isHighlighted - Only used when isHighlightable=true | True if button is highlighted, false otherwise
     * @param {Function} options.onButtonClick - Gets called, if button is clicked
     */
    var Button = function (options) {
        Inheritance.inheritConstructor(DomElement, this, Merge({ // jscs:ignore
            id: TypeCheck.isString(options.id) ? options.id : Failure.throwTypeError("options.id is not a string"),
            name: TypeCheck.isString(options.name) ? options.name : Failure.throwTypeError("options.name is not a string"),
            html: '<div id="' + options.id + '" class="jean-button">' + options.name + '</div>',
            isHighlightable: TypeCheck.isFunction(options.isHighlightable) ? options.isHighlightable : false,
            isHighlighted: TypeCheck.isBoolean(options.isHighlighted) ? options.isHighlighted : false,
            onButtonClick: TypeCheck.isFunction(options.onButtonClick) ? options.onButtonClick : function () { },
        }, TypeCheck.isDefined(options) ? options : {}));
        this.element.addEventListener("click", this._onButtonClick.bind(this));
        this._setState();
    };
    Inheritance.inheritPrototype(Button, DomElement)
    /** @enum */
    Button.highlightType = Button.prototype.highlightType = {
        HIGHLIGHTED: "highlighted",
        DEHIGHLIGHTED: "dehighlighted"
    };
    /** */
    Button.prototype.highlight = function () {
        this.options.isHighlighted = true;
        this._setStyle();
    };
    /** */
    Button.prototype.dehighlight = function () {
        this.options.isHighlighted = false;
        this._setStyle();
    };
    /** */
    Button.prototype._setState = function () {
        if (this.options.isHighlightable) {
            this.options.isHighlighted ? this.highlight() : this.dehighlight();
        }
    };
    /** */
    Button.prototype._setStyle = function () {
        var classList = this.element.classList;
        if (this.options.isHighlightable) {
            if (this.options.isHighlighted) {
                classList.add("jean-button-selected");
            } else {
                classList.remove("jean-button-selected");
            }
        }
    };
    /** */
    Button.prototype._onButtonClick = function () {
        var state = null;
        if (this.options.isHighlightable) {
            this.options.isHighlighted ? this.dehighlight() : this.highlight();
            this.options.isHighlighted ? state = this.highlightType.HIGHLIGHTED : state = this.highlightType.DEHIGHLIGHTED;
        }
        this.options.onButtonClick(this.options.id, state);
    };
    return Button;
});