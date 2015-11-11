#!/usr/bin/env node
var shell = require('shelljs');
var ask = require('inquirer');


////* DROPS *////

shell.echo('Preparing reactive fluid')
setTimeout(function() {
	shell.echo('\033[34mProcess: Scaning Project for *needed* directories \033[0m');
	shell.echo(process.cwd());
}, 1000)

setTimeout(function() {
	if (!shell.test('-e', 'app/components')) {
		shell.echo('\033[33mSorry, Drops needs an "app/components" directory structure \033[0m');

		// Inquirer for directory creation (yes/no)

		shell.exit(1);
	} else {
		shell.echo('\033[32mSuccess: "app/components" Found! \033[0m');
		shell.exec('ls -l'); // Highlight dir if possible

		// Create COMPONENT files
		//// app/components/component.js
		//// app/styles/component.scss

	}
}, 2000)


// CHECK COMMANDER.JS instead of inquirer


////* MESSAGE COLORING *////

// Warning
// shell.echo('\033[33mWarning: {message} \033[0m')

// ERROR
// shell.echo('\033[31mError: {message} \033[0m')

// SUCCESS
// shell.echo('\033[32mSuccess: {message} \033[0m')
