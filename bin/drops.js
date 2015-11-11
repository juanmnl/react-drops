#!/usr/bin/env node
var shell = require('shelljs');
var inquirer = require('inquirer');


////* DROPS *////

shell.echo('Preparing reactive fluid');
setTimeout(function() {
	shell.echo('\033[34mScaning Project for the "app/components/" dir structure \033[0m');
	shell.echo(process.cwd());
}, 1000)

setTimeout(function() {
	if (!shell.test('-e', 'app/components')) {
		shell.echo('\033[33mSorry, Drops needs an "app/components" directory structure \033[0m');

		// Create Directories?
		// Should only run once (normally)
		var question = [
			{
		    type: "confirm",
		    name: "createDirs",
		    message: "Do you want to create them?",
		    default: true
		  }
		]
		inquirer.prompt(question, function(answer) {
    	if (answer.createDirs !== false) {
				shell.echo('Creating dirs...');
				shell.exec('mkdir app && mkdir app/components');
				shell.echo('\033[32mDirectories created \033[0m')
				shell.exec('tree app/');

			} else {
				shell.echo('Oh, ok. \033[34m:(\033[0m Bye, bye!');
				shell.exit(1);
			}
		})
	} else {
		shell.exec('tree app/'); // Highlight dir if possible
		shell.echo('\033[32mAwesome! "app/components" found! \033[0m');

		// Create COMPONENT files
		//// app/components/component.js
		//// app/styles/component.scss

	}
}, 2000)


// CHECK COMMANDER.JS instead of inquirer


////* MESSAGE COLORING *////

// Process
// shell.echo('\033[34mProcess: {message} \033[0m');

// Warning
// shell.echo('\033[33mWarning: {message} \033[0m')

// ERROR
// shell.echo('\033[31mError: {message} \033[0m')

// SUCCESS
// shell.echo('\033[32mSuccess: {message} \033[0m')
