import express from "express";
const router=express.Router();
import { saveCode , fetchCode} from "../controller/editor.controller.js";

router.post('/save', saveCode);
router.get('/fetch/:url', fetchCode);


export default router;