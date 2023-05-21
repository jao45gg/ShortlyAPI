import { Router } from "express"
import validateSchema from "../middlewares/validateSchema.middleware.js";
import signUpSchema from "../schemas/signUp.schema.js";
import signInSchema from "../schemas/signIn.schema.js";
import { signIn, signUp, getUser } from "../controllers/users.controllers.js";
import authValidation from "../middlewares/auth.middleware.js";

const userRouter = Router();

userRouter.post("/signup", validateSchema(signUpSchema), signUp);
userRouter.post("/signin", validateSchema(signInSchema), signIn);
userRouter.get("/users/me", authValidation, getUser);

export default userRouter;