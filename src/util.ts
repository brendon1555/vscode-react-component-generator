import * as path from "path";
import * as fs from 'fs';
import * as mustache from 'mustache';

import { CONSTANTS } from "./const";
import REACT_TEMPLATES from "./templates";


export function validate(componentName: string): string | null {
	if (!componentName || componentName === "") {
		return "Component name can not be empty";
	}
	if (!componentName.match(/^[A-Z]/)) {
		return "Component name must begin with an uppercase letter";
	}
	if (!componentName.match(/^[0-9a-zA-Z]+$/)) {
		return "Component must only contain alphanumeric characters";
	}
	return null;
}


export const buildReactTemplate = (config: any, componentName: string, cPath: string) => {
    
    let indexExtension = config.includes(CONSTANTS.features.ts) ? ".ts" : ".js";
    let componentExtension = `${indexExtension}x`;

    const FILE_NAMES = {
        component: `${componentName}${componentExtension}`,
        componentIndex: `index${indexExtension}`,
        storybook: `${componentName}.stories${componentExtension}`,
		test: `${componentName}.test${componentExtension}`
    };

    const COMPONENT_TEMPLATE = indexExtension === ".ts" ? REACT_TEMPLATES.tsTemplate : REACT_TEMPLATES.jsTemplate;
    
    // Writing main component file
    const componentMainResponse = fs.writeFileSync(
        path.join(
            cPath,
            FILE_NAMES.component
        ),
        mustache.render(COMPONENT_TEMPLATE, {componentName})
    );

    // Writing component index file
    const componentIndexResponse = fs.writeFileSync(
        path.join(
            cPath,
            FILE_NAMES.componentIndex
        ),
        mustache.render(REACT_TEMPLATES.index, {componentName})
    );

    // Writing storybook file
    if(config.includes(CONSTANTS.features.storybook)) {
        const componentStorybookResponse = fs.writeFileSync(
            path.join(
                cPath,
                FILE_NAMES.storybook
            ),
            mustache.render(REACT_TEMPLATES.storybook, {componentName})
        );
    }

	// Writing test file
    if(config.includes(CONSTANTS.features.tests)) {
        const componentTestResponse = fs.writeFileSync(
            path.join(
                cPath,
                FILE_NAMES.test
            ),
            mustache.render(REACT_TEMPLATES.test, {componentName})
        );
    }

};