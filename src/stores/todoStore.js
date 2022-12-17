let todos = [];
let Id = 0;
const todoDate = (new Date()).toISOString().split('T')[0];


function addTodos(name, description){
    let todoConstructor = {"Id": Id + 1, "Name": name, "Description": description, "Date": todoDate};
    todos.push(todoConstructor);
}

