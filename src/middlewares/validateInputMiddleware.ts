import { Request, Response, NextFunction } from "express";

export const validateInputMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { title, items } = req.body;

  if (!title || !Array.isArray(items)) {
    return res.status(400).json({ message: "Entrada inválida" });
  }

  next();
};
