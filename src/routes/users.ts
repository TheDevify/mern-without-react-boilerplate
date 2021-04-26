import express from "express";
import * as UserController from "./../controllers/user_controller";

const router = express.Router();

router.get("/", UserController.index);
router.post("/", UserController.create);
router.put("/:id", UserController.edit);
router.delete("/:id", UserController.destroy);

export default router;