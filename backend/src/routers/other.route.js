import help from "../controllers/help.controller.js"

import health from "../controllers/health.controller.js"
import express from "express"
// import keepup from "../controllers/upkeep.controller.js";

let other=express.Router()
other.get("/help", help);
other.get("/health", health);
// other.get("/upkeep", keepup);

export default other;
