
import express from "express";
import { add, list, read, remove, update } from "../controller/blog.controller";


const routerBlog = express.Router();

routerBlog.get("/blog", list);
routerBlog.get("/blog/:id", read);
routerBlog.post("/blog", add);
routerBlog.put("/blog/:id", update);
routerBlog.delete("/blog/:id", remove);

// router.param("userId", userById);

export default routerBlog;