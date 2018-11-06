({
    baseUrl: '.',
    out: 'dist/jean-button.js',
    optimize: 'uglify2',
    name: 'node_modules/jean-amd/dist/jean-amd',
    include: ["src/Button"],
    wrap: {
        start:
            "(function (root, factory) { \n" +
            " \t if (typeof define === 'function' && define.amd) { \n" +
            "\t \t define([], factory); \n" +
            "\t} else { \n" +
            "\t \troot.Button = root.Button || {}; \n" +
            "\t \troot.Button = factory();\n" +
            "\t}\n" +
            "}(this, function() {",
        end:
            "\n \t return require('src/Button'); \n" +
            "}));"
    },
    paths: {
        "css": "node_modules/require-css/css",
        "css-builder": "node_modules/require-css/css-builder",
        "normalize": "node_modules/require-css/normalize",
        DomElement: "node_modules/jean-dom-element/src/DomElement",
        DomUtil: "node_modules/jean-dom-util/src/DomUtil",
        TypeCheck: "node_modules/jean-type-check/src/TypeCheck",
        Failure: "node_modules/jean-failure/src/Failure",
        Inheritance: "node_modules/jean-inheritance/src/Inheritance",
        Merge: "node_modules/jean-merge/src/Merge",
        "button-css": "src/css/button"
    },
    stubModules: ["css", "text", "normalize", "css-builder"]
})