/* 1. sub-module to compile all models */
var app = angular.module('model', ['pair_model', /*'experiment_model', 'analysis_model'*/]);

/* 2. List of function of all models attached */
/* pair_model = mathematical model of ligand and receptor pair parameters */
/* experiment_model = mathematical model of time spent on experiment */
/* analysis_model = mathematical model of graphs and statistics */