import { index, createtarea } from "../controller/TareaController.js";
import express from "express";

const router = express.Router();

router.get("/home", index);
router.post("/savetarea", createtarea);
export default router;
