#! /usr/bin/env node
var shell = require('shelljs');
shell.exec("echo Hey there! How are you?");

setTimeout(function() {
	shell.exec('echo "\033[34mProcess: Scaning Project Structure \033[0m"');
},1000)

setTimeout(function() {
	shell.exec('ls -l');
	shell.exec('echo "\033[33mWarning: App folder Not Found!! \033[0m"')
}, 4000)

setTimeout(function() {
	shell.exec('echo "\033[31mError: Component Not Created! \033[0m"')
	shell.exec('echo "\033[32mSuccess: Component Created! \033[0m"')
}, 5000)
