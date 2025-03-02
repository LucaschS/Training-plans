import { Response, Request, NextFunction } from "express";

declare module "express-session" {
  interface SessionData {
    isLoggedIn: boolean | undefined;
  }
}

export const getLogin = (req: Request, res: Response, next: NextFunction) => {
  // console.log("d");
  req.session;
  console.log(req.session, "d");
};

export const postLogin = (req: Request, res: Response, next: NextFunction) => {
  req.session.isLoggedIn = true;
  req.session.save();
  // res.redirect("/");
  // console.log(req.session, "a");
};
