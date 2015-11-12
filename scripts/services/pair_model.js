	/* Pair Object Constructor */ 

/* 1. registering pair model */
var app = angular.module('pair_model', [])
	
/* 2. registering constants */	
	// none

/* 3. registering object constructors function and injecting constants parameter */
.service('pairConstructor', [pair]); // build all parameter associated to receptor-ligand pair mathematical model

/* 4. 'pair' object constructor */
function pair(tLC, fLC, tRC, fRC, pC, Kd, kOn, kOff, mwL, mwR) {
	this.tLC = tLC; // not needed; equal to fLC
	this.fLC = fLC; // constant; user input
	this.tRC = tRC; // constant; random assignment
	this.fRC = fRC; // not needed; equal to tRC-pC
	this.pC = pC; // not needed; derived from pC-On/Off equation
	this.Kd = Kd; // constant; random assignment
	this.kOn = kOn; // constant; derived from kOff and Kd
	this.kOff = kOff; // constant; random assigment
	this.mwL = mwL; // constant; random assignment
	this.mwR = mwR; // constant; random assignment
	this.mwP = mwP; // constant derived
}




/* still need to work out what are the three different randomly assigned values + test

// generating random tRC value

var new_tRC = function() {
	var flip = 3*math.random();
	if (flip <= 1) {
		tRC = 1;
	} else if (flip > 2) {
		tRC = 3;
	} else {
		tRC = 2;
	}
};

*/


/*

function // create array of data and get it out
- Kd = random assigning  
- kOff = random assigning 
- mwL = random assigning 
- mwR = random assigning
- mwP = mwR + mwL
- pC-On = association equation (kOn, tRC, fLC, timeOn) // derived
- pC-Off = disassociation equation (tRC, kOff, timeOff) // derived

*/