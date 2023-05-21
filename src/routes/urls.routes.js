import { Router } from "express";
import validateSchema from "../middlewares/validateSchema.middleware.js";
import urlSchema from "../schemas/url.schema.js";
import authValidation from "../middlewares/auth.middleware.js";
import { shorten } from "../controllers/urls.controllers.js";

const urlRouter = Router();

urlRouter.post("/urls/shorten", authValidation, validateSchema(urlSchema), shorten);

export default urlRouter;