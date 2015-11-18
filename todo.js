/* PRIMARY EXECUTABLE MODULE

1. Check if there is saved cookies
- YES = load existing pair ID
- NO = go to step 2
2. New pair and experiment object is created with parameters
- run var new_pair = pair(0, 0, 0, 0, 0, 0, 0, 0, 0, 0) + save to cookies
- run function to generate tRC, Kd, kOff, mwL, mwR and save on top of it to cookies
- run function to derive kOn, mwP + save to cookies
3. Software is now ready to be used
- user input fLC, timeOn and timeOff -> allow plotting of RU-pOn, RU-pOff

	*/

	/* NG-CONTROLLER

// Top Box
1. Menu Bar
2. Autoprompt to load save

// Output
3. Plot sensorgram
- Sensorgram Plotting = RU-pOn, RU-pOff given fLR, timeOn, timeOff
- save RUeq, points (RU-pOn/Off against timeOn/Off)
4. Plot Langmuir graph
- Curve fitting by residual minimisation
- Langmuir Isotherm Plotting = RUeq against fLR
- save Kd
- Resulting Kd given from graph

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
12. Time On (s)
- save timeOn input by student
13. Time Off (s)
- save timeOff input by student
14. Free Ligand Concentration (M)
- save fLC input by student

// Data Display
12. Zero
13. Outlier
14. Select All
15. Excel Export
- Data points on 1st order disassociation -> Plot to get gradient of log(RU-pOff) against time which is kOff
- Data from the table of results, especially RUeq (bound), fLC (free) to plot bound/free against bound

	*/

	/* NG-DIRECTIVES

	*/

	/* NG-FILTERS

	*/