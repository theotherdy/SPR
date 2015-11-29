	/* Converting values in M to uM on display */

/* 1. registering modules, services and constants */
var app = angular.module('uM_filter', [])
	.filter('uMFilter', microMol);

/* 2. creating sub-methods as part of the function object that can be called */

function microMol() {
	
}