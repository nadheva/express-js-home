//import express
import express from "express";

//import page controller
import {Home, About} from "../controllers/page.js";

//init express route
const router = express.Router();

//basic route
router.get('/', Home);
router.get('/about', About);

export default router;