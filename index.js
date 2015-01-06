// Copyright 2014, Renasar Technologies Inc.
/* jshint: node:true */

'use strict';

var _ = require('lodash');

module.exports = function (di, directory) {
    var helper = require('./lib/common/di.js')(di, directory || __dirname);

    return {
        helper: helper,
        injectables: _.flatten(
            [
                helper.requireGlob(__dirname + '/lib/protocol/*.js'),
                helper.requireGlob(__dirname + '/lib/services/*.js'),
                helper.requireWrapper('q', 'Q'),
                helper.requireWrapper('nconf'),
                helper.simpleWrapper(_, '_'),
                require('./lib/common/constants.js'),
                require('./lib/common/logger.js')
            ]
        )
    };
};