import { Response, Request, NextFunction } from "express";
import User from "../models/user";

const getUsers = async (req: Request, res: Response, next: NextFunction) => {
  // console.log(req.session, "d");

  try {
    const users = await User.find();

    // console.log(users);

    res.json({ users: users });
  } catch (error: unknown) {
    throw new Error("Can not fetch any Users");
  }
};

export default getUsers;
