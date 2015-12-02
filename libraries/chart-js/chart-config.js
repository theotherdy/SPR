	/* Creating chart using Chart.js */

/* 1. registering modules, services and constants */
angular.module('chart_config', ['chart.js', 'output_model'])
	.service('chartConfig', ['outputModel', chartCreate]);

/* 2. creating sub-methods as part of the function object that can be called */

function chartCreate(outputModel) {
	var chart = this;
	var output = outputModel;

		// chart aesthetic
	chart.options = {
		animation: false,
		animationSteps: 60,
		animationEasing: "easeOutQuart",
		responsive: false,
		scaleIntegersOnly: true,
		scaleBeginAtZero: true,
	};
	chart.colours = {

	};

		// chart data display
	chart.labels = output.intermediateTimeOn; // x-axis coordinates
	chart.data = [output.intermediateRU_on]; // y-axix coordinates
	/* chart.series = ['Series A']; */

  		// chart functionality
	chart.onClick = function(points, evt) {
    	console.log(points, evt);
  	};
  	chart.hover = function() {

  	};
}