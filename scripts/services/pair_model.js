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



	/* this.totalLigandConc = totalLigandConc; // total ligand concentration
	this.freeLigandConc = freeLigandConc; // free ligand concentration
	this.totalReceptorConc = totalReceptorConc; // total receptor concentration
	this.freeReceptorConc = freeReceptorConc; // free receptor concentration
	this.ligandReceptorConc = ligandReceptorConc; // bound ligand-receptor concentration
	this.Kd = Kd; // Kd for ligand-receptor pair
	this.kOff = kOff; // k-off for ligand receptor pair
	this.kOn = kOff/Kd; // k-on for ligand-receptor pair 

	Generate pair ID*/