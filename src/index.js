const importFile = require("../lib/importFile");

const { run: runTimer } = importFile("./withTimer");
const { run: runExternalModule} = importFile("./withExternalModule");

try {
	runTimer();
} catch {
	console.log("timers are not available")
}

try {
	runExternalModule();
} catch {
	console.log("timers are not available")
}
