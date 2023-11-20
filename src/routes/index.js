import express from "express";
import path from 'path'
import {fileURLToPath} from "url"
import  isLoggedIn from "../middleware/isLoggedIn.js"; 

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const router = express.Router();

const views = path.join(__dirname, "../views");

router.get("/",isLoggedIn, (req,res)=>{
    res.sendFile(path.join(views, 'index.html'));
});

router.get("/register", (req,res)=>{
    res.sendFile(path.join(views, 'register.html'));
});

export default router;