/* 1. master module to compile in all sub-modules for embedding ng-app in HTML */
var app = angular.module('SPR', ['model']);

/* 2. application function */

app.controller('viewCtrl', viewMethod);

function viewMethod(systemModel) {
	// helps view in identifying systemModel
	this.system = systemModel;
	this.system.set_tRC();
}

viewMethod.$inject = ['systemModel'];


// pairModel - this.set_tRC();
// pairModel - this.flip_Kd();
// pairModel - this.set_Kd();
// pairModel - this.flip_kOff();
// pairModel - this.set_kOff();
// pairModel - this.set_kOn(this.Kd, this.kOff);
// pairModel - this.flip_mwL();
// pairModel - this.set_mwL();
// pairModel - this.flip_mwR();
// pairModel - this.set_mwR();
// pairModel - this.set_mwP(this.mwL, this.mwR);
