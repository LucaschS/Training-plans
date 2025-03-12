import { Response, Request, NextFunction } from "express";

declare module "express-session" {
  interface SessionData {
    isLoggedIn: boolean | undefined;
    user: string;
  }
}

exports.postLogin = (req: Request, res: Response, next: NextFunction) => {
  req.session.isLoggedIn = true;

  console.log(req.session.isLoggedIn, " postlogin");

  res.redirect("/");
};

exports.getLogin = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.session.isLoggedIn, "getLogin");
  res.redirect("/");
};
