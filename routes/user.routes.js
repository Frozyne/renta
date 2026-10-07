import { Router } from "express";
import { getUser, getUsers, addUser, updateUser, deleteUser } from "../controllers/user.controller.js";

const userRouter = Router()

userRouter.get('/', getUsers) 
userRouter.get('/:id', getUser)
userRouter.post('/', addUser)
userRouter.put('/:id', updateUser)
userRouter.delete('/:id', deleteUser)

export default userRouter