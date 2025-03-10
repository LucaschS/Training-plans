import { Response, Request, NextFunction } from "express";

declare module "express-session" {
  interface SessionData {
    isLoggedIn: boolean | undefined;
    user: string;
  }
}

export const getLogin = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.session, "user");
  res.send("ok");
};

export const postLogin = (req: Request, res: Response, next: NextFunction) => {
  req.session.user = "user";
  console.log(req.session.user, "user");
};
