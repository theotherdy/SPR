	/* Output Mathematical Model */

/* 1. registering output model */
var app = angular.module('output_model', []);

app.controller('outputModel', function(){

/* 2. defining constants */
	this.vol = 0.000001; // volume inside chip
	this.RPUM = 0.01; // response per unit mass (RU/Da)

/* 3. output model controller */

/* data storage

var data = {
	flc: [],
	timeon: [],
	timeoff: [],
}
                               
data.flc.push(value);
data.flc[0];

*/

/* a) set fLC: user input via form; variable */
	this.fLC = []; // fLC  must be <= 0, to obtain background value
	this.add_fLC = function(new_fLC) {
		this.fLC.push(new_fLC);
	};
	// ng-repeat fail when repeated value is used; why?

/* a) set timeOn: user input via form; variable */
	this.timeOn = []; // timeOn must be < 0
	this.add_timeOn = function(new_timeOn) {
		this.timeOn.push(new_timeOn);
	};		
	// ng-repeat fail when repeated value is used; why?

/* b) set timeOff: user input via form; variable */
	this.timeOff = []; // timeOff must be < 0
	this.add_timeOff = function(new_timeOff) {
		this.timeOff.push(new_timeOff);
	};
	// ng-repeat fail when repeated value is used; why?

/* c) set RU0: user select data set from table; variable  */


/* d) find actual RU0: derived by tRC * RPUM * mwR * vol; constant (check); variable */


/* e) find ComplexConcOn: derived by association equation (kOn, tRC, fLC, timeOn); variable */


/* f) find ComplexConcOff: derived by disassociation equation (tRC, kOff, timeOff); variable */


/* g) find RU_ComplexOn: derived by (ComplexConcOn * RPUM * mwL * vol); variable */


/* h) find RU_ComplexOff: derived by (ComplexConcOff * RPUM * mwL * vol); variable */


/* i) find RU_ComplexEQ: derived by (RU_ComplexOn at timeOn); variable */


});