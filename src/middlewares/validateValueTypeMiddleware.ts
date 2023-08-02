import {Request, Response, NextFunction} from 'express'

export const validateValueTypeMiddleware = (
    req: Request, 
    res: Response, 
    next: NextFunction
) => {
    const newItemValue = req.body.value

    if (typeof newItemValue !== 'string') {
        return res.status(400).json({ message: 'Tipo do valor de entrada inválido' });
      }
    next()
 }