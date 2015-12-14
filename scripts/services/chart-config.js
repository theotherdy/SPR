	/* Creating chart using API */

/* 1. registering modules, services and constants */
angular.module('chart_config', ['output_model', 'angular-flot'])
	.service('chartConfig', ['outputModel', chartCreate]);

/* 2. creating sub-methods as part of the function object that can be called */

function chartCreate(outputModel) {
	var chart = this;
	var output = outputModel;

	chart.dataSet = [[[0,1], [1,2]]];
	chart.option = {

	};


}