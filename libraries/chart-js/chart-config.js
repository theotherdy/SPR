	/* Creating chart using Chart.js */

/* 1. registering modules, services and constants */
var app = angular.module('chart_config', ['chart.js'])
	.service('chartConfig', [chartCreate]);

/* 2. creating sub-methods as part of the function object that can be called */

function chartCreate() {
	this.labels = ["January", "February", "March", "April", "May", "June", "July"];
	this.series = ['Series A', 'Series B'];
	this.data = [
	    [65, 59, 80, 81, 56, 55, 40],
	    [28, 48, 40, 19, 86, 27, 90]
  	];
	this.onClick = function (points, evt) {
    	console.log(points, evt);
  	};
}