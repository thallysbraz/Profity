import express from "express";
const routes = express.Router();

import ClassesController from "./controllers/ClassesController";
import ConnectionsController from "./controllers/ConnectionsController";

const ClassesControllers = new ClassesController();
const ConnectionsControllers = new ConnectionsController();

routes.get("/classes", ClassesControllers.index);
routes.post("/classes", ClassesControllers.create);

routes.get("/connections", ConnectionsControllers.index);
routes.post("/connections", ConnectionsControllers.create);

export default routes;
