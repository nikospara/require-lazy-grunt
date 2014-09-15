require-lazy-grunt
==================

Grunt plugin for [require-lazy](https://github.com/nikospara/require-lazy).

Getting Started
---------------

This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install require-lazy-grunt --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks("require-lazy-grunt");
```

The "require_lazy_grunt" task
-----------------------------

### Overview
In your project's Gruntfile, add a section named `require_lazy_grunt` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
	require_lazy_grunt: {
		options: {
			buildOptions: options,
			config: config,
			callback: function(modules, pmresult) { ... }
		}
	}
});
```

### Options

#### options.buildOptions
Type: `Object`
*Required*.

Require-lazy-specific options. See examples from `require-lazy` (e.g. the [options of the grunt example](https://github.com/nikospara/require-lazy/blob/master/examples/module-discovery-grunt/build-scripts/options.js)).

#### options.config
Type: `Object`
*Required*.

The configuration object to pass to `r.js`. See [here](http://requirejs.org/docs/optimization.html) and [here](https://github.com/jrburke/r.js/blob/master/build/example.build.js) for full reference.

#### options.callback
Type: `function(modules, pmresult)`

A callback function to execute when the build completes successfully.

Release History
---------------
_(Nothing yet)_
