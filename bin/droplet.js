#! /usr/bin/env node
var shell = require('shelljs');
shell.echo('Hey there! How are you?');

// shell.find('app/') or src?

setTimeout(function() {
	shell.echo('\033[34mProcess: Scaning Project Structure For an app/ or src/ directory \033[0m');
},1000)

setTimeout(function() {
	shell.exec('ls -l');
	shell.echo('\033[33mWarning: App folder Not Found!! \033[0m')
}, 4000)

setTimeout(function() {
	shell.echo('\033[31mError: Component Not Created! \033[0m')
	shell.echo('\033[32mSuccess: Component Created! \033[0m')
}, 5000)
