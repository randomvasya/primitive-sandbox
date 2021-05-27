const vm = require('vm');
const fs = require('fs');
const path = require('path');

function getCtx() {
	return vm.createContext(Object.freeze({
		require: importFile,
		module,
	}));
}

function importFile(filePath) {
	const aboluteFilePath = path.resolve(require.main.path, filePath + ".js");

	const source = fs.readFileSync(aboluteFilePath);
	const filename = path.basename(filePath, '.js');

	const script = new vm.Script(source, {filename});

	return script.runInContext(getCtx())
}

module.exports = importFile;
