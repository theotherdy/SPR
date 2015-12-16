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

	table.options = {
			data: table.data,
			columnDefs: [
					{
						field: "trial",
						displayName: "trial no."
					},
					{
						field: "fLC",
						displayName: "free ligand conc/uM"
					},
					{
						field: "timeOn",
						displayName: "association time/s"
					},
					{
						field: "maxRU_reached",
						displayName: "max resonance reached/RU"
					}
				]
			};

	table.compileData = function(experiment_steps, out_fLC, out_timeOn, out_RU_On_Output) {
		table.compiledSet = {
			"trial": experiment_steps,
			"fLC": out_fLC,
			"timeOn": out_timeOn,
			"maxRU_reached": out_RU_On_Output
		};
		table.data.push(angular.copy(table.compiledSet));
	};
}