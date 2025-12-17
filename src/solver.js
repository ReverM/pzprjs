exports.files = ["solver/cspuz_solver_backend", "solver/SolverBridge"].map(
	function(mod) {
		return "src/" + mod + ".js";
	}
);
