	/* Pair Object Constructor */ 

/* 1. registering pair model */
var app = angular.module('pair_model', [])
	
/* 2. registering constants */	
	// none

/* 3. registering object constructors function and injecting constants parameter */
	.service('pairConstructor', [pair]); // build all parameter associated to receptor-ligand pair mathematical model

/* 4. calling out 'pair' object constructor function */
function pair() {

}