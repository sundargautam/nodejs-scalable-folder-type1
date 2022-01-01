import { Request, Response, NextFunction } from "express";
const authMiddleware = {
  //only having one role field
  hasRole: (roles: string[]) => {
    return (req: Request, res: Response, next: NextFunction) => {
      try {
        const user = { role: "user" };
        if (roles.includes(String(user?.role))) {
          next();
        } else {
          res
            .status(403)
            .send({ message: "User doesn't have enough permission." });
          return;
        }
      } catch (error) {
        console.error(error);
        res.status(422).send({ message: "Please login and try again." });
      }
    };
  },
};

export default authMiddleware;
