# TODO CLI Application in Typescript by Gen-AI-Developer (Syed Safdar Ali Shah)

Inquirer is typescript package which is used to take different types of input from user on CLI.

## Installation

Use the package manager [npm](https://www.npmjs.com/package/inquirer) to install Inquirer.

```bash
npm  i inquirer
```

## Usage

```typescript
const answers = await inquirer.prompt([
        {
            type: 'list',
            name: 'todo_name',
            choices: [
                '*> View TODOs',
                '*> Add  TODO',
                '*> Del  TODO',
                '*> Move to Complete',
                '*> View Completed  TODOs',
                '*> Exit  TODO',
            ]
        }
    ]);
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
