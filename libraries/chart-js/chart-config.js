	/* Creating chart using Chart.js */

/* 1. registering modules, services and constants */
angular.module('chart_config', ['chart.js'])
	.service('chartConfig', [chartCreate]);

/* 2. creating sub-methods as part of the function object that can be called */

function chartCreate() {
	var chart = this;
	chart.labels = ["January", "February", "March", "April", "May", "June", "July"];
	chart.series = ['Series A', 'Series B'];
	chart.data = [
	    [65, 59, 80, 81, 56, 55, 40],
	    [28, 48, 40, 19, 86, 27, 90]
  	];
	chart.onClick = function (points, evt) {
    	console.log(points, evt);
  	};
}