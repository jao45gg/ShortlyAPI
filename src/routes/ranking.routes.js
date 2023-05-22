import { Router } from "express";
import { getRank } from "../controllers/ranking.controllers.js";

const rankRouter = Router();

rankRouter.get("/ranking", getRank);

export default rankRouter;