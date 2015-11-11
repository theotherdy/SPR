/* File: SPR mathematical model */

/* 1. registering models */

var app = angular.module('model', [])
		/* a) registering constants */
	.constant('RPUM','0.01') // response per unit mass (RU/Da)
	.constant('start_of_day', '9.0')
	.constant('start_of_lunch', '12.0')
	.constant('start_of_dinner', '17.0')
	.constant('start_of_night', '21.0')
	.constant('end_of_day', '24.0')
	.constant('time_per_action', '0.5')
		/* b) registering object constructors function and injecting constants parameter into it */
	.service('pairConstructor', [pair]) // build all parameter associated to receptor-ligand pair mathematical model
	.service('experimentConstructor', [experiment, 'start_of_day', 'start_of_lunch', 'start_of_dinner', 'start_of_night', 'end_of_day', 'time_per_action'])	// build all parameter associated to status and control panel
	.service('analysisConstructor', [analysis, 'RPUM']); // build statistics, output, results display and data display function
	


/* 2. Receptor Object Constructor */ 

		/* a) Calling out 'pair' object constructor function */
function pair() {
	this.totalLigandConc = totalLigandConc; // total ligand concentration
	this.freeLigandConc = freeLigandConc; // free ligand concentration
	this.totalReceptorConc = totalReceptorConc; // total receptor concentration
	this.freeReceptorConc = freeReceptorConc; // free receptor concentration
	this.ligandReceptorConc = ligandReceptorConc; // bound ligand-receptor concentration
	this.Kd = Kd; // Kd for ligand-receptor pair
	this.kOn = kOn; // k-on for ligand-receptor pair
	this.kOff = kOff; // k-off for ligand receptor pair
};

		/* b) Adding new property into the pair class */
pair.prototype.



/* 3. Experiment Object Constructor */

		/* a) Calling out 'experiment' object constructor function */
function experiment() {

};



/* 4. Analysis Object Constructor */

		/* a) Calling out 'analysis' object constructor function */
function analysis() {

};