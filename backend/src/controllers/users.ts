// import express, { Request, Response, NextFunction } from "express";

import { Response, Request, NextFunction } from "express";
import User from "../models/user";

const getUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await User.find();

    console.log(users);

    res.json({ u: users });
  } catch (error: unknown) {
    throw new Error("Can not fetch any Users");
  }
};

export default getUsers;
