const Todo = require ('../model/Todo')

// get all todos
exports.getAllTodos = async (req, res) => {
    try {
        let todos = await Todo.find();
        if (todos.length === 0)
        return res.status(404).json({
            success: false,
            message: 'No todos were found',
        });
        res.status(200).json({
            success: true,
            message: 'Todos found',
            todos,
            count: todos.length,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message,
        });
    } 
};

// get single todo
exports.getTodo = async (req, res) => {
    try {
        let id = {_id:req.params.id};
        let todo = await Todo.findOne(id);
        if (!user) return res.status(404).json({
            success: false,
            message: 'Todo not found',
        });
        res.status(200).json({
            success: true,
            message: 'Todo found',
            todo,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal Server Error',
            error: error.message
        });
    }
};

//create Todos
exports.createTodo = async (req, res) => {
    try {
        let todo = await req.body;
        let created = await Todo.create(todo);
        if (!created) return res.status(400).json({
            success: false,
            message: "Todo Creation failed",
        })
        return res.status(201).json({
            success: true,
            message: "Todo Created Successfully",
            todo: created,
        })
    } catch (error) {
        
        res.status(500).json({
            success:false,
            message: "Internal Server Error",
            error: error.message,
        });
    }
};

// update todo
exports.updateTodo = async (req, res) =>{
    try {
        let id = { _id: req.params.id}
        let todo = req.body;
        let update = await Todo.findOneAndUpdate(id, user, {new: true});

        if(!update) return req.status(400).json({
            success: false,
            message: "Todo not updated",
        });
        return res.status(200).json({
            success: true,
            message: "Todo updated",
            todo: update,
        }); 
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message,
        })
    }
       
}
// delete todo
exports.deleteTodo = async (req, res) => {
    try {
        let id = {_id: req.params.id}
        let deletedTodo = await Todo.findByIdAndRemove(id);
        if (!deletedTodo)
            return res.status(400).json({
                success: false,
                message: "Todo not deleted"
            });
        return res.status(200).json({
            success: true,
            message: "Todo deleted successfully",
        }); 
    
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server error",
            error: error.message,
        })
    }
    }