import { Router } from "express";
import {
  deleteUser,
  findMutuals,
  listUser,
  saveUser,
  searchUsers,
  updateUser,
} from "../controller/github.controller.ts";

export const router = Router();

router.get("/save-user/:username", saveUser);
router.get("/find-mutual-followers/:username", findMutuals);
router.get("/search-users", searchUsers);
router.delete("/delete-user/:username", deleteUser);
router.patch("/update-user/:username", updateUser);
router.get("/list-users", listUser);
