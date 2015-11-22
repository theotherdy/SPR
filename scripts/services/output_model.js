	/* Output Mathematical Model: contain functions to input user-generated parameters and ouput values for graphical display */

/* 1. registering modules, services and constants */
var app = angular.module('output_model', [])
	.constant('vol', 0.000001) // volume inside chip
	.constant('RPUM', 0.01) // response per unit mass (RU/Da)
	.service('outputModel', [outputMethod]);

function outputMethod(vol, RPUM) { 

/* 2. creating sub-methods as part of the function object that can be called */

/* a) defining arrays to store data locally */
	this.fLC = []; // fLC  must be <= 0, to obtain background value
	this.timeOn = []; // timeOn must be < 0
	this.timeOff = []; // timeOff must be < 0

/* a) set fLC: user input via form; variable */
	this.add_fLC = function(new_fLC) {
		this.fLC.push(new_fLC);
	};

/* b) set timeOn: user input via form; variable */
	this.add_timeOn = function(new_timeOn) {
		this.timeOn.push(new_timeOn);
	};		

/* c) set timeOff: user input via form; variable */
	this.add_timeOff = function(new_timeOff) {
		this.timeOff.push(new_timeOff);
	};

}


/* data storage




var data = {
	flc: [],
	timeon: [],
	timeoff: [],
}
                               
data.flc.push(value);
data.flc[0];

*/

/* c) set RU0: user select data set from table; variable  */


/* d) find actual RU0: derived by tRC * RPUM * mwR * vol; constant (check); variable */


/* e) find ComplexConcOn: derived by association equation (kOn, tRC, fLC, timeOn); variable */


/* f) find ComplexConcOff: derived by disassociation equation (tRC, kOff, timeOff); variable */


/* g) find RU_ComplexOn: derived by (ComplexConcOn * RPUM * mwL * vol); variable */


/* h) find RU_ComplexOff: derived by (ComplexConcOff * RPUM * mwL * vol); variable */


/* i) find RU_ComplexEQ: derived by (RU_ComplexOn at timeOn); variable */
