/* sub-module to compile in all models */
var app = angular.module('model', ['pair_model', 'experiment_model', 'analysis_model']);

	/* DEFINING MODEL

1. Pair
a) values
- tLC // not needed - equal to fLC
- fLC // constant
- tRC // constant
- fRC // not needed
- pC // not needed 
- Kd // constant
- kOn // constant
- kOff // constant
- mwL // constant
- mwR // constant
b) function
- fLC = input by student 
- Kd = random assigning 
- kOff = random assigning 
- tRC = 3 different randomly assigned values 
- mwL = random assigning 
- mwR = random assigning 
- pC-On = association equation (kOn, tRC, fLC, timeOn) // derived
- pC-Off = disassociation equation (tRC, kOff, timeOff) // derived

2. Analysis
a) values
- RPUM // fixed constant
- RU0 // constant
- timeOn // variable
- timeOff // variable
- RU-pOn // derived
- RU-pOff // derived
b) function
- timeOn = input by student 
- timeOff = input by student 
- RU0 = tRC * RPUM * mwR * vol 
- RU-pOn = pC-On * RPUM * mwL * vol 
- RU-pOff = pC-Off * RPUM * mwL * vol 

3. Experiment
a) values
- volume // constant
- start_of_day // constant
- start_of_lunch // constant
- start_of_dinner // constant
- start_of_night // constant
- end_of_day // constant
- time_per_action // constant

	*/

	/* DEBUGGING & TESTING MODULE

1. Derivation of Kd
- given randomly assigned value
- derivation from Langmuir Isotherm plot
2. Derivation of kOff
- from using randomly assigned kOff
- from using Kd derived from Langmuir Isotherm
3. Derivation of kOn
- from using randomly assigned Kd and kOff (kinetic)
- from using kOff and Kd derived from sensorgram and Langmuir Isotherm respectively (thermodynamic)
4. Derivation of fRC
- from Kd, fLC, lRC @ equilibrium
- from tRC-lRC = fRC

	*/