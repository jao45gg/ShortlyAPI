import { Router } from "express"
import validateSchema from "../middlewares/validateSchema.middleware.js";
import signUpSchema from "../schemas/signUp.schema.js";
import signInSchema from "../schemas/signIn.schema.js";
import { signIn, signUp } from "../controllers/users.controllers.js";

const userRouter = Router();

userRouter.post("/signup", validateSchema(signUpSchema), signUp);
userRouter.post("/signin", validateSchema(signInSchema), signIn);

export default userRouter;