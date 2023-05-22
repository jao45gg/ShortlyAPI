import { Router } from "express";
import userRouter from "./users.routes.js";
import urlsRouter from "./urls.routes.js";
import rankRouter from "./ranking.routes.js";

const router = Router();
router.use(userRouter);
router.use(urlsRouter);
router.use(rankRouter);


export default router;