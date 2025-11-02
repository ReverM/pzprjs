exports.files = [
	"solver/cspuz_solver_backend",
	"solver/SolverBridgeNoWorker"
].map(function(mod) {
	return "src/" + mod + ".js";
});
