import User from "../models/user.model.js";
import { successResponse } from "../utils/success.js";

export const getUsers = async (req, res, next) => {
    try {
        const users = await User.find()
        return successResponse(res, 200, 'Users retrieved', users)
    } catch (error) {
        next(error)
    }
}

export const getUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id)
        if (!user) return res.status(404).send('User not found.')
        
        return successResponse(res, 200, 'User retrieved', user)
    } catch (error) {
        next(error)
    }
}

export const addUser = async (req, res, next) => {
    try {
        // Create a new instance of the User model
        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })
        
        // Save it to the database
        const savedUser = await newUser.save()
        return successResponse(res, 201, 'New user saved', savedUser)
    } catch (error) {
        next(error);
    }
}

export const updateUser = async (req, res, next) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id, 
            { name: req.body.name, email: req.body.email, password: req.body.password },
            { returnDocument: "after" } 
        )
        
        if (!updatedUser) return res.status(404).send('User not found.')
        
        return successResponse(res, 200, 'User updated', updatedUser)
    } catch (error) {
        next(error )
    }
}

export const deleteUser = async (req, res, next) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id)
        if (!deletedUser) return res.status(404).send('User not found.')
        
        return successResponse(res, 200, 'User deleted successfully', deleteUser)
    } catch (error) {
        next(error);
    }
}