	/* 1. compilation of module for mathematical model */
var app = angular.module('model', ['system_model', 'output_model', 'experiment_status']);

/* pair_model = mathematical model of ligand and receptor pair parameters */
/* experiment_model = mathematical model of time spent on experiment */
/* output_model = mathematical model of graphs and statistics output */

	/* 2. compilation of module for filters */
var app = angular.module('filters', ['time_filter', 'mw_filter', 'uM_filter']);

/* time_filter = converting values for time of day to digital time display */
/* mw_filter = converting values for molecular weight to removing 1000 from display */
/* uM_filter = converting values in M to uM on display */

	/* 3. creating module for Chart.js */
var app = angular.module('chart-js', ['chart_config']);

/* chart_config = creating chart */

	/* 4. creating module for cookies */
var app = angular.module('cookies', ['ngCookies']);