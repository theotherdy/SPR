	/* Creating chart using Chart.js */

/* 1. registering modules, services and constants */
var app = angular.module('chart_config', [])
	.service('chartConfig', [chartCreate]);

/* 2. creating sub-methods as part of the function object that can be called */



function chartCreate(Chart) {
/*
a) layout basics of charts
		// required default
	var Chartjs = Chart.noConflict(); 
		// set the context of the canvas element we want to select
	var ctx = document.getElementById("SPRchart").getContext("2d");
		// create a new line chart
	var createSPR_chart = new Chart(ctx).Line(data, options);

b) adding the dataset
	var data = {
	    labels: ["January", "February", "March", "April", "May", "June", "July"],
	    datasets: [
	        {
	            label: "My First dataset",
	            fillColor: "rgba(220,220,220,0.2)",
	            strokeColor: "rgba(220,220,220,1)",
	            pointColor: "rgba(220,220,220,1)",
	            pointStrokeColor: "#fff",
	            pointHighlightFill: "#fff",
	            pointHighlightStroke: "rgba(220,220,220,1)",
	            data: [65, 59, 80, 81, 56, 55, 40]
	        },
	        {
	            label: "My Second dataset",
	            fillColor: "rgba(151,187,205,0.2)",
	            strokeColor: "rgba(151,187,205,1)",
	            pointColor: "rgba(151,187,205,1)",
	            pointStrokeColor: "#fff",
	            pointHighlightFill: "#fff",
	            pointHighlightStroke: "rgba(151,187,205,1)",
	            data: [28, 48, 40, 19, 86, 27, 90]
	        }
	    ]
	};

c) chart interaction configuration
	var options = {
			// global chart configurations
		animation: true,
		animationSteps: 60,
		animationEasing: "easeOutQuart",
		showScale: true,
		scaleLineColor: "rgba(0,0,0,.1)",
		scaleLineWidth: 1,
		scaleShowLabels: true,
		scaleIntegersOnly: true,
		scaleBeginAtZero: true,
		scaleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
		scaleFontSize: 12,
		scaleFontStyle: "normal",
		responsive: true,
		maintainAspectRatio: true,
			// line chart configurations
		scaleShowGridLines : true,
		scaleGridLineColor : "rgba(0,0,0,.05)",
		scaleGridLineWidth : 1,
		scaleShowHorizontalLines: true,
		scaleShowVerticalLines: true,
		bezierCurve : true,
		bezierCurveTension : 0.4,
		pointDot : true,
		pointDotRadius : 4,
		pointDotStrokeWidth : 1,
		pointHitDetectionRadius : 20,
		datasetStroke : true,
		datasetStrokeWidth : 2,
		datasetFill : true,
	};
*/
}
