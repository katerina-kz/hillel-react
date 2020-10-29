module.exports = (req, res, next) => {
    const todo = req.body;
    if (todo.title) {
        req.body.valid = true;
        return next();
    }
    res.status(400).send({
        error: 'Please, fill the todo title'
    })
};