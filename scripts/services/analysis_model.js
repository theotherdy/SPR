	/* Analysis Object Constructor

1. registering analysis model
var app = angular.module('analysis_model', [])

2. registering constants
	.constant('RPUM','0.01') // response per unit mass (RU/Da)
	.constant('start_of_day', '9.0')
	.constant('start_of_lunch', '12.0')
	.constant('start_of_dinner', '17.0')
	.constant('start_of_night', '21.0')
	.constant('end_of_day', '24.0')
	.constant('time_per_action', '0.5')

3. registering object constructors function and injecting constants parameter
	.service('analysisConstructor', [analysis, 'RPUM']); // build statistics, output, results display and data display function

4. calling out 'analysis' object constructor function
function analysis() {

}

Analysis
a) values
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