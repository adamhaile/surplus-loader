"use strict";

var preprocessor = require("surplus-preprocessor");

module.exports = function preprocess(content) {
    return preprocessor.preprocess(content, { });
};
