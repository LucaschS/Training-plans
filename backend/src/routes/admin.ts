import express from "express";

import {
  postAddUser,
  getEditUser,
  postEditUser,
  postDeleteUser,
  getUser,
} from "../controllers/admin";

const router = express.Router();

export const postAddUserRouter = router.post("/admin/add-user", postAddUser);

export const getEditUserRouter = router.get(
  "/admin/edit-user/:userId",
  getEditUser
);

export const postEditUserRouter = router.post(
  "/admin/edit-user/",
  postEditUser
);

export const postDeleteUserRouter = router.delete(
  "/admin/delete-user",
  postDeleteUser
);

export const getUserRouter = router.get("/admin/:userId", getUser);
