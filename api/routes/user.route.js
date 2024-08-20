// import express from "express";
// import { test } from "../controllers/user.controller.js"

// const router = express.Router();

// router.get("/test", test);

// export default router;


import express from "express";
import { signup } from "../controllers/user.controller.js";

const router = express.Router();

router.post("/signup", signup);

export default router;
