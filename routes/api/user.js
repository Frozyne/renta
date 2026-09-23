import { Router } from "express";
import User from "../../models/user.model.js";

const userRouter = Router()

userRouter.get('/', async (req, res) => {
    try {
        const users = User.find()
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json(error)
    }
}) 

userRouter.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).send('User not found.');
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ message: 'Invalid ID format', error });
    }
})

userRouter.post('/', async (req, res) => {
    try {
        // Create a new instance of the User model
        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });
        
        // Save it to the database
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(400).json({ message: 'Error creating user', error });
    }
})

userRouter.put('/:id', async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id, 
            { name: req.body.name, email: req.body.email, password: req.body.password },
            { returnDocument: "after" } 
        );
        
        if (!updatedUser) return res.status(404).send('User not found.');
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(400).json({ message: 'Error updating user', error });
    }
})

userRouter.delete('/:id', async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if (!deletedUser) return res.status(404).send('User not found.');
        
        res.status(200).json({ message: 'User deleted successfully', user: deletedUser });
    } catch (error) {
        res.status(400).json({ message: 'Error deleting user', error });
    }
})

export default userRouter