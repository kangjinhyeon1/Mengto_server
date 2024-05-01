import express, { Router } from "express";
import { logIn } from "../controller/auth";

const router: Router = express.Router();

router.post('/login', logIn);

export default router