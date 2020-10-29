const { Router } = require('express');
const fs = require('fs');
const todosValidator = require("../validators/todos-validator")

const todoRouter =  Router();

todoRouter.get("/", function (req, res) {
    const todos = JSON.parse(fs.readFileSync(`${__dirname}/todos.json`));
    res.json(todos);
});

todoRouter.post("/", todosValidator, function (req, res) {
        const newTodo = req.body;
        const todos = JSON.parse(fs.readFileSync(`${__dirname}/todos.json`));

        if (todos.find(todo => todo.title === newTodo.title)) {
            return res.status(400).send({
                error: 'You have already the same todo'
            })
        }

        newTodo.id = Date.now();
        newTodo.complete = false;
        todos.push(newTodo);
        fs.writeFileSync(`${__dirname}/todos.json`, JSON.stringify(todos));

        res.status(200).send('todo is ready');
    }
);

todoRouter.get('/:todoId', (req, res) => {
    const todoId = +req.params.todoId;
    console.log(todoId);
    const todos = JSON.parse(fs.readFileSync(`${__dirname}/todos.json`));
    const todo = todos.find(todo => todo.id === todoId);
    if (!todo) {
        res.status(404).send({
            error: "todo not found"
        });
        return;
    };
    res.send(todo);
});

todoRouter.put('/:todoId', todosValidator, (req, res) => {
    const newTodo = req.body;
    const todoId = +req.params.todoId;
    const todos = JSON.parse(fs.readFileSync(`${__dirname}/todos.json`));
    const updatedTodos = todos.map(todo => todo.id === todoId ? {id: todoId, ...newTodo} : todo);
    fs.writeFileSync(`${__dirname}/todos.json`, JSON.stringify(updatedTodos));

    res.status(200).send('Todo has been updated');
});

todoRouter.delete('/:todoId', (req, res) => {
    const todoId = +req.params.todoId;
    const todos = JSON.parse(fs.readFileSync(`${__dirname}/todos.json`));
    const todoIndex = todos.findIndex(todo => todo.id === todoId);
    if (todoIndex === -1) {
        res.status(404).send({
            error: "todo not found"
        });
        return;
    };
    todos.splice(todoIndex, 1)
    fs.writeFileSync(`${__dirname}/todos.json`, JSON.stringify(todos));

    res.status(200).send('Todo has been deleted');
});

module.exports = todoRouter;