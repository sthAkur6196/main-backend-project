import { Router } from "express";
import { registerUser, showInfo } from "../controllers/user.controller.js";

const router = Router()

router.route('/register').post(registerUser);

router.route('/info').get(showInfo);


export default router;