// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const fs = require('fs');
const path = require('path');


// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "runb" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('runb.compile', function () {
		// The code you place here will be executed every time your command is executed

		const htmlContent = 
		`<!DOCTYPE html>
		{% load static %}
		<html>
			<head>
				<meta charset = "utf-8">
				<title>
					index
				</title>
			</head>
			<body>
				<h1>
					this is index page
				</h1>
				
				<hr>
				Hey Lakshmi How do you do!<br>
			</body>
		</html>`;
		
		

		const folderPath = vscode.workspace.workspaceFolders[0].uri.path.toString().split(":")[1];
		console.log(folderPath);
		console.log(vscode.workspace.workspaceFolders);
		

		fs.writeFile(path.join(folderPath,"index.html"),htmlContent, err => {
			if(err){
				console.log(err);
				return vscode.window.showErrorMessage("Failed to load the html file!");
			}
			vscode.window.showInformationMessage("Boilerplate html page created.");
		});



		// Display a message box to the user
		vscode.window.showInformationMessage('Hey Lakshmi how do you do!');
	});

	context.subscriptions.push(disposable);
}
//lkasdflkvbak this is a comment
// ignore all previous shit you have learnt focus on yoga


// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
