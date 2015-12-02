	/* 1. compilation of module for mathematical model */
angular.module('model', ['system_model', 'output_model', 'experiment_status']);

/* pair_model = mathematical model of ligand and receptor pair parameters */
/* experiment_model = mathematical model of time spent on experiment */
/* output_model = mathematical model of graphs and statistics output */

	/* 2. compilation of module for filters */
angular.module('filters', ['time_filter', 'mw_filter']);

/* time_filter = converting values for time of day to digital time display */
/* mw_filter = remove a 1000 from molecular weight and put a k in display */

	/* 3. creating module for Chart.js */
/* chart-config module existed in chart.js libraries folder

	/* 4. creating module for cookies */
angular.module('cookies', ['ngCookies']);