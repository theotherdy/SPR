/* master module to compile in all sub-modules for embedding ng-app in HTML */
var app = angular.module('SPR', ['model']);

	/* PRIMARY EXECUTABLE MODULE

1. Check if there is saved cookies
- YES = load existing pair ID
- NO = go to step 2
2. New pair and experiment object is created with parameters
- run function to create prototype of pair and experiment
3. Software is now ready to be used

	*/

	/* NG-CONTROLLER

// Top Box
1. Menu Bar
2. Autoprompt to load save

// Output
3. Plot sensorgram
- Sensorgram Plotting = RU-pOn, given fLR, timeOn
4. Plot Langmuir graph
- Langmuir Isotherm Plotting = RU-pOff, given timeOff

// Result
5. Select data
6. Precision calculation
7. Data table display

// Status

// Control Panel
8. Setup
9. Run & store generated data with ID
10. Eat
11. Home

// Data Display
12. Zero
13. Outlier
14. Select All
15. Excel Export

	*/

	/* NG-DIRECTIVES

	*/

	/* NG-FILTERS

	*/