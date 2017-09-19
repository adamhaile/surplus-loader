"use strict";

var compiler = require("surplus/compiler"),
    sourcemap = require('source-map');

module.exports = function preprocess(content, incomingMap) {
    var { src, map } = compiler.compile(content, { sourcemap: "extract" });

    map.sources[0] = this.resourcePath;

    if (incomingMap) {
        // use source-map to combine incoming map with surplus-preprocessor's
        var gen = sourcemap.SourceMapGenerator.fromSourceMap(new sourcemap.SourceMapConsumer(map));
        gen.applySourceMap(new sourcemap.SourceMapConsumer(incomingMap));
        map = gen.toJSON();
    }

    this.callback(null, src, map);
};
