import inquirer from "inquirer"
process.stdin.setMaxListeners(20); // Set the number as needed
let todo_job_list = [
    '1) this is first todo',
]
let completed_todo_s: string[] = []
async function Application() {
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
    if (answers.todo_name == '*> View TODOs') {
        if (todo_job_list.length === 0) {
            console.log('No Todo avaiable to View, please Add.')
            Application()
        }
        else {
            console.log(todo_job_list)
            Application()
        }
    }
    else if (answers.todo_name == '*> Add  TODO') {
        Add_TODO()
    }
    else if (answers.todo_name == '*> Del  TODO') {
        if (todo_job_list.length === 0) {
            console.log('No Todo to Delete, please Add.')
            Application()
        }
        else {
            Delete_TODO()
        }
    }
    else if (answers.todo_name == '*> Move to Complete') {
        if (todo_job_list.length === 0) {
            console.log('No Todo avaiable to move, please Add.')
            Application()
        } else {
            MoveToCompleteTodo()
        }
    }
    else if (answers.todo_name == '*> View Completed  TODOs') {
        console.log('completed_todo_s', completed_todo_s)
        Application()
    }
    else if (answers.todo_name == '*> Exit  TODO') {
        console.log('Thanks for Using Todo Application')
    }
}
async function Add_TODO() {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            message: 'Please enter fresh TODO',
            name: 'newToDo',

        }
    ]);
    todo_job_list.push(`${todo_job_list.length + 1}) ${answers.newToDo}`)
    Application()
}
async function Delete_TODO() {
    const answers = await inquirer.prompt([
        {
            type: 'list',
            name: 'deleteToDo',
            message: 'Select a ToDo to Delete',
            choices: todo_job_list
        }
    ]);

    // Filter out the selected ToDo item
    todo_job_list = todo_job_list.filter(todo => todo !== answers.deleteToDo);

    Application();
}

async function MoveToCompleteTodo() {
    const answers = await inquirer.prompt([
        {
            type: 'list',
            name: 'moveToDo',
            choices: todo_job_list

        }
    ]);
    completed_todo_s.push(`${completed_todo_s.length + 1}) ${answers.moveToDo}`)
    todo_job_list = todo_job_list.filter(todo => todo !== answers.moveToDo);
    Application()
}
Application()


