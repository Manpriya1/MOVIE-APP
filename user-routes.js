import express from "express";
import { deleteUser, getAllUsers,signUp,updateUser,login,getUserById,getBookingsOfUser} from "../controllers/user-controller";

const userRouter = express.Router();

userRouter.get("/",getAllUsers);
userRouter.get("/:id", getUserById);
userRouter.post("/signUp",signUp);
userRouter.put("/:id",updateUser);
userRouter.delete("/:id",deleteUser);
userRouter.post("/login",login);
userRouter.get("/bookings/:id", getBookingsOfUser);


export default userRouter;