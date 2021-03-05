# VS Code React Component Generator

[![Version](https://vsmarketplacebadge.apphb.com/version-short/brendon1555.react-component-generator.svg)](https://marketplace.visualstudio.com/items?itemName=brendon1555.react-component-generator)
[![Install](https://vsmarketplacebadge.apphb.com/installs-short/brendon1555.react-component-generator.svg)](https://marketplace.visualstudio.com/items?itemName=brendon1555.react-component-generator)
[![Ratings](https://vsmarketplacebadge.apphb.com/rating-short/brendon1555.react-component-generator.svg)](https://marketplace.visualstudio.com/items?itemName=brendon1555.react-component-generator)


## Installation

### Visual Studio Marketplace

Launch _Quick Open_:

- [_Linux_](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-linux.pdf): `Ctrl+P`
- [_macOS_](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf): `⌘+P`
- [_Windows_](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf): `Ctrl+P`

Paste the following command and press `Enter`:

```shell
ext install dsznajder.es7-react-js-snippets
```

## Usage

### From Explorer

- Right click the folder in the sidebar where you want to create a component.
- Select `Create Component`.
- Select whether to use Typescript, and include Storybook or Tests.
- Enter a name for the Component.
- A Component will be created in a directory named after your input.

### From Command Palette

- Open the command palette and type `Generate Component`, press `Enter`.
- Select whether to use Typescript, and include Storybook or Tests.
- Enter a name for the Component.
- A Component will be created in a directory named after your input.


## Configuration

You can access to the extension's settings through VSCode settings. You can customize:

### `reactComponentGenerator.componentsPath` (default: `""`)
Path relative to the workspace root to place components when not using the Explorer.