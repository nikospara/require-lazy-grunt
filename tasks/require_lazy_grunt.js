/*
 * require-lazy-grunt
 * https://github.com/nikospara/require-lazy-grunt
 *
 * Copyright (c) 2013 Nikos Paraskevopoulos
 * Licensed under the MIT license.
 */
"use strict";

module.exports = function(grunt) {
	var requireLazy = require("require-lazy");
	
	grunt.registerTask("require_lazy_grunt", "Grunt plugin for require-lazy", function() {
		var done, buildOptions, config, callback;
		
		done = this.async();
		buildOptions = this.options().buildOptions;
		config = this.options().config;
		callback = this.options().callback;
		
		requireLazy.build(buildOptions, config,
			function(modules, pmresult) {
				if( typeof(callback) === "function" ) {
					callback(modules, pmresult)
				}
				done(true);
			},
			function(stepName, rjsError, details) {
				grunt.log.subhead(stepName);
				grunt.log.error(rjsError);
				if( details ) grunt.log.error(JSON.stringify(details));
				done(false);
			}
		);
	});
};
