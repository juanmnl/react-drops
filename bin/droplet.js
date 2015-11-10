#!/usr/bin/env node
var shell = require('shelljs');
var ask = require('inquirer');

// shell.find('app/') or src?
shell.echo('Preparing reactive fluid')
setTimeout(function() {
	shell.echo('\033[34mProcess: Scaning Project For "app/components" directories \033[0m');
	shell.echo(process.cwd());
	if (!shell.test('-e', 'app/components')) {
		shell.echo('Sorry, Drops needs "app/components" dir structure');
	  shell.exit(1);
	} else {
		shell.echo('\033[32mSuccess: "app/components" Found! \033[0m');
		shell.exec('ls -l');
	}
},1000)

setTimeout(function() {
	shell.echo('\033[33mWarning: Components folder Not Found!! \033[0m')
}, 4000)

setTimeout(function() {
	shell.echo('\033[31mError: Component Not Created! \033[0m')
	shell.echo('\033[32mSuccess: Component Created! \033[0m')
}, 5000)
