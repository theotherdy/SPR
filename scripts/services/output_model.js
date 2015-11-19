	/* Output Mathematical Model */

/* 1. registering output model */
var app = angular.module('output_model', []);

app.controller('outputModel', function(){

/* 2. registering constants */
	this.vol = 0.000001; // volume inside chip
	this.RPUM = 0.01; // response per unit mass (RU/Da)

/* 3. output model controller */


});




/*


Analysis
a) values
- timeOn // variable
- timeOff // variable
- RU0 // constant
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

