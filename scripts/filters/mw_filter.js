	/* Converting values for molecular weight to removing 1000 from display */

/* 1. registering modules, services and constants */
var app = angular.module('mw_filter', [])
	.filter('mwFilter', molWeight);

/* 2. creating sub-methods as part of the function object that can be called */

function molWeight() {
	
}