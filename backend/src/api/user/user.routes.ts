import express from 'express'
const { getData, updateUser, updateData, addAction, deleteAction, addCategory, addLabel } = require('./user.controller')

const userRouter = express.Router()

userRouter.get('/data', getData)
userRouter.put('/user', updateUser)
userRouter.put('/data', updateData)

userRouter.post('/action', addAction)
userRouter.delete('/action/:actionId', deleteAction)

userRouter.post('/category', addCategory)

userRouter.post('/label', addLabel)

module.exports = userRouter
