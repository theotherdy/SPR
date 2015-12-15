	/* Creating table using ui-grid API */

/* 1. registering modules, services and constants */
angular.module('table_config', ['output_model', 'experiment_status', 'ui.grid'])
	.service('tableConfig', ['outputModel', 'experimentStatus', tableCreate]);

/* 2. creating sub-methods as part of the function object that can be called */

function tableCreate(outputModel, experimentStatus) {
	var table = this;
	var output = outputModel;
	var experiment = experimentStatus;
	table.data = [];

	table.compileData = function(experiment_steps, out_fLC, out_timeOn, out_RU_On_Output) {
		table.compiledSet = {
			"trial number": experiment_steps,
			"free ligand conc./microM": out_fLC,
			"association experiment time/s": out_timeOn,
			"max resonance reached": out_RU_On_Output
		};
		table.data.push(angular.copy(table.compiledSet));
	};
	
}