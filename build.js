({
    baseUrl: '.',
    out: 'dist/jean-button.js',
    optimize: 'none',
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
     paths:{
       
    }
})