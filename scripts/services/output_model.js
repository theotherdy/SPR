	/* Output Mathematical Model */

/* 1. registering output model */
var app = angular.module('output_model', []);

/* 2. registering constants */
var RPUM = 0.01; // response per unit mass (RU/Da)
var vol = 0.000001; // volume inside chip

/*

3. registering object constructors function and injecting constants parameter
	.service('analysisConstructor', [analysis, 'RPUM']) // build statistics, output, results display and data display function

4. calling out 'analysis' object constructor function
function analysis() {

}

Analysis
a) values
- volume // constant
- RPUM // fixed constant
- RU0 // constant
- timeOn // variable
- timeOff // variable
- RU-pOn // derived
- RU-pOff // derived
- RUeq // derived
b) function
- timeOn = input by student 
- timeOff = input by student 
- RU0 = tRC * RPUM * mwR * vol 
- RU-pOn = pC-On * RPUM * mwL * vol 
- RU-pOff = pC-Off * RPUM * mwL * vol 
- RUeq = RU-pOn at input timeOn

*/

