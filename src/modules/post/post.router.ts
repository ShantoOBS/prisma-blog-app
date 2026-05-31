import express from "express";
import { PostController } from "./post.controller";
import auth, { UserRole } from "../../middlewares/auth";

const router = express.Router();

// Define your routes here
router.get("/", PostController.getAllPost);
router.post("/",auth(UserRole.USER) ,PostController.createPost);
router.get(
    "/:postId",
    PostController.getPostById
);


export const postRouter = router;