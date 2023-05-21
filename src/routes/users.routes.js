import { Router } from "express"
import validateSchema from "../middlewares/validateSchema.middleware.js";
import userScheama from "../schemas/user.schema.js";
import { signUp } from "../controllers/users.controllers.js";

const userRouter = Router();

userRouter.post("/signup", validateSchema(userScheama), signUp);

export default userRouter;