// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as path from "path";
import * as fs from 'fs';

import { CONSTANTS } from "./const";
import { validate, buildReactTemplate } from "./util";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('"react-component-generator" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('extension.createReactComponent', execute);

	context.subscriptions.push(disposable);
}


const execute = (args: any) => {

	console.log(args);

	var fsPath: string;

	if(args?.fsPath) {
		fsPath = args.fsPath;
	} else if(vscode.workspace.workspaceFolders) {
		if (vscode.workspace.getConfiguration("reactComponentGenerator").get("componentsPath")) {
			fsPath = `${vscode.workspace.workspaceFolders[0].uri.fsPath}/${vscode.workspace.getConfiguration("reactComponentGenerator").get("componentsPath") as string}`;
		} else {
			fsPath = vscode.workspace.workspaceFolders[0].uri.fsPath;
		}
	} else {
		vscode.window.showErrorMessage(`Unable to create a component without a workspace.`);
		return;
	}

	console.log(fsPath);

	const componentNameOptions: vscode.InputBoxOptions = {
		prompt: `React Component will be created at ${fsPath}`,
		placeHolder: "Enter Component Name",
		validateInput: validate,
		ignoreFocusOut: true
	};

	const featureSelection = [
		CONSTANTS.features.ts,
		CONSTANTS.features.storybook,
		CONSTANTS.features.tests
	];

	const featureSelectionOptions = {
		canPickMany: true,
		placeHolder: "Select features to be included",
		ignoreFocusOut: true
	};


	vscode.window.showQuickPick(featureSelection, featureSelectionOptions).then(selectedFeatures => {
		vscode.window.showInputBox(componentNameOptions).then(componentName => {

			if (typeof componentName === "string") {
				const componentFolder = path.join(fsPath, componentName);
				try {
					fs.mkdirSync(componentFolder, {recursive: true});
					buildReactTemplate(selectedFeatures, componentName, componentFolder);
				}
				catch (error) {
					vscode.window.showErrorMessage(`Could not create the component. ${error}`);
				}
			}

		});
	});


};


// this method is called when your extension is deactivated
export function deactivate() { }
