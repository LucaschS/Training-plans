import User from "../models/user";

import { Response, Request, NextFunction } from "express";

export const postAddUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const name: string = req.body.name;
    const surname: string = req.body.surname;
    const email: string = req.body.email;
    const phone: string = req.body.phone;
    console.log(name, "name");
    const user = new User({
      name: name,
      surname: surname,
      email: email,
      phone: phone,
    });
    console.log(user, "user");

    await user.save();
  } catch (error: unknown) {
    throw new Error("Can't add user");
  }
};

export const getEditUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const editMode = req.query.edit;

  if (!editMode) {
    return res.redirect("/users");
  }

  try {
    const usrId = req.params.userId;

    const user = await User.findById(usrId);
    res.json({ user: user });
  } catch (error: unknown) {
    throw new Error("Can't fetch user");
  }
};

export const postEditUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const usrId = req.body.userId;
  const name = req.body.name;
  const surname = req.body.surname;
  const email = req.body.email;
  const phone = req.body.phone;
  console.log(usrId, name);
  try {
    const user = await User.findByIdAndUpdate(usrId, {
      name: name,
      surname: surname,
      email: email,
      phone: phone,
    });

    console.log(user);
  } catch (error) {}
};

export const postDeleteUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const usrId = req.body.userId;
  await User.findByIdAndDelete(usrId);
  res.redirect("/users");
};
