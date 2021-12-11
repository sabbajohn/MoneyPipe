import { Request, Response } from "express"
import { IAction, IErrorMsg } from "../../interfaces/dataInterfaces"

const userService = require('./user.service')

module.exports = {
    getData,
    updateUser,
    updateData,
    addAction,
    deleteAction,
    addCategory,
    deleteCategory,
    addLabel,
    deleteLabel
}

// User

async function getData(req: Request, res: Response) {
    try {
        if (req.session.user) {
            const user = await userService.getById(req.session.user._id)

            const { startDate, endDate } = req.query

            if (startDate && endDate) {
                const filteredActions = user.data.actions.filter((action: IAction) => {
                    if (action.createdAt < +startDate || action.createdAt > +endDate) return false
                    return true
                })

                user.data.actions = filteredActions
            }
            res.json(user.data)

        }
    } catch (err) {
        const errorMsg: IErrorMsg = { title: 'Opps, an error occurred', msg: 'Could not get your account data, try again later', type: 'danger' }
        res.status(200).send(errorMsg)
    }
}

async function updateUser(req: Request, res: Response) {
    try {
        if (req.session.user) {
            const user = await userService.updateUser(req.body, req.session.user._id)
            req.session.user = user
            delete user.data
            res.json(user)
        }
    } catch (err) {
        const errorMsg: IErrorMsg = { title: 'Opps, an error occurred', msg: 'Could not update your account data, try again later', type: 'danger' }
        res.status(200).send(errorMsg)
    }
}

async function updateData(req: Request, res: Response) {
    try {
        if (req.session.user) {
            const user = await userService.updateData(req.body, req.session.user._id)
            req.session.user = user
            res.json(user.data)
        }
    } catch (err) {
        const errorMsg: IErrorMsg = { title: 'Opps, an error occurred', msg: 'Could not update your account data, try again later', type: 'danger' }
        res.status(200).send(errorMsg)
    }
}


// Crud

async function addAction(req: Request, res: Response) {
    try {
        if (req.session.user) {
            const action = req.body
            const userId = req.session.user._id
            const data = await userService.addAction(action, userId)
            res.json(data)
        }
    } catch (err) {
        const errorMsg: IErrorMsg = { title: 'Opps, an error occurred', msg: 'Could not add new action, try again later', type: 'danger' }
        res.status(200).send(errorMsg)
    }
}

async function deleteAction(req: Request, res: Response) {
    try {
        if (req.session.user) {
            const { actionId } = req.params
            const userId = req.session.user._id
            const data = await userService.deleteAction(actionId, userId)
            return res.json(data)
        }
    } catch (err) {
        const errorMsg: IErrorMsg = { title: 'Opps, an error occurred', msg: 'Could not delete action, try again later', type: 'danger' }
        res.status(200).send(errorMsg)
    }
}

async function addCategory(req: Request, res: Response) {
    try {
        if (req.session.user) {
            const category = req.body
            const userId = req.session.user._id
            const data = await userService.addCategory(category, userId)
            res.json(data)
        }
    } catch (err) {
        const errorMsg: IErrorMsg = { title: 'Opps, an error occurred', msg: 'Could not add new category, try again later', type: 'danger' }
        res.status(200).send(errorMsg)
    }
}

async function deleteCategory(req: Request, res: Response) {
    try {
        if (req.session.user) {
            const { categoryId } = req.params
            const userId = req.session.user._id
            const data = await userService.deleteCategory(categoryId, userId)
            res.json(data)
        }
    } catch (err) {
        const errorMsg: IErrorMsg = { title: 'Opps, an error occurred', msg: 'Could not delete category, try again later', type: 'danger' }
        res.status(200).send(errorMsg)
    }
}

async function addLabel(req: Request, res: Response) {
    try {
        if (req.session.user) {
            const label = req.body
            const userId = req.session.user._id
            const data = await userService.addLabel(label, userId)
            res.json(data)
        }
    } catch (err) {
        const errorMsg: IErrorMsg = { title: 'Opps, an error occurred', msg: 'Could not add new label, try again later', type: 'danger' }
        res.status(200).send(errorMsg)
    }
}

async function deleteLabel(req: Request, res: Response) {
    try {
        if (req.session.user) {
            const { labelId } = req.params
            const userId = req.session.user._id
            const data = await userService.deleteLabel(labelId, userId)
            res.json(data)
        }
    } catch (err) {
        const errorMsg: IErrorMsg = { title: 'Opps, an error occurred', msg: 'Could not delete later, try again later', type: 'danger' }
        res.status(200).send(errorMsg)
    }
}