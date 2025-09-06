import help from "../controllers/help.controller.js"
import health from "../controllers/health.controller.js"
import express from "express"

let other=express.Router()
jokeRouter.get("/help", help);
jokeRouter.get("/health", health);
// jokeRouter.get("/upkeep", upkeep);

export default other;
