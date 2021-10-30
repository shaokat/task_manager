const express = require('express')
const router = express.Router()

const {
getAlltasks,
getTask,
createTask,
updateTask,
deleteTask,

} = require('../controller/tasks')


router.route('/').get(getAlltasks).post(createTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)

module.exports = router