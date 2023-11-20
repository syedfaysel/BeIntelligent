import { express } from "express";

import { signin, register } from "../controllers/authController";

const router = express.Router();


router.get("/", signin); //api/v1/auth/
router.get("/", register);
router.post('/addbooks', , addbooks) //api/v1/auth/addbooks/
router.get('/', allbooks)