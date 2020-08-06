import express from "express";
const routes = express.Router();

import ClassesController from "./controllers/ClassesController";

const ClassesControllers = new ClassesController();

routes.get("/classes", ClassesControllers.index);
routes.post("/classes", ClassesControllers.create);
export default routes;
