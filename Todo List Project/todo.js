let input = prompt("What would you like to do?")
const todos = ['Collect Chicken Eggs', 'Clean LittleBox']
while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        console.log('****************')
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}:${todos[i]}`);
        }
        console.log('****************')
    } else if (input === 'new') {
        const newTodo = prompt('OK, what is the new todo?');
        todos.push(newTodo);
        console.log('Add to the list');
    } else if (input === 'delete') {
        const index = parseInt(prompt('Ok, enter an index you want to delete.'));
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1);
            console.log(`Delete ${deleted[0]}`);
        } else {
            console.log('Unknown index');
        }
    }
    input = prompt('What would you like to do?')
}
console.log('QUIT THE APP')
