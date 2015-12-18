	/* Creating chart using flot API */

/* 1. registering modules, services and constants */
angular.module('chart_config', ['output_model', 'angular-flot'])
	.service('chartConfig', ['outputModel', chartCreate]);

/* 2. creating sub-methods as part of the function object that can be called */
function chartCreate(outputModel) {
	var chart = this;
	var output = outputModel;

	chart.dataset = output.RU_CompiledLabelPlotAll;
	
	chart.options = {
		grid: {
		    backgroundColor: { colors: [ "#fff", "#eee" ] }
		},
		xaxis: {
			axisLabelUseCanvas: true,
			axisLabel: "time/s",
			position: "bottom",
			axisLabelcolor: "red",
			axisLabelFontFamily: "Verdana",
			axisLabelFontSizePixels: 12,
			axisLabelPadding: 5
		},
		yaxis: {
			axisLabelUseCanvas: true,
			axisLabel: "resonance/RU",
			position: "left",
			axisLabelcolor: "red",
			axisLabelFontFamily: "Verdana",
			axisLabelFontSizePixels: 12,
			axisLabelPadding: 5
		}
	};
}