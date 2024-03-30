import inquirer from "inquirer"
let todo_job_list = [
    '1) this is first todo'
]
let completed_todo_s = []
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
        console.log(todo_job_list)
        Application()
    }
    else if (answers.todo_name == '*> Add  TODO') {
        Add_TODO()
    }
    else if (answers.todo_name == '*> Del  TODO') {
        Delete_TODO()

    }
    else if (answers.todo_name == '*> Move to Complete') {

    }
    else if (answers.todo_name == '*> View Completed  TODOs') {
        console.log('todo_job_list = ', todo_job_list)
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
    // console.log('Select a ToDo to Delete')
    const answers = await inquirer.prompt([
        {
            type: 'list',
            name: 'deletToDo',
            choices: todo_job_list

        }
    ]);
    todo_job_list.filter(Delete_TODO)
    Application()

}
Application()