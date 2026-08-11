import { Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { AuthRequest } from "../interfaces/auth-request.interface";
export const authMiddleware = (
    req: AuthRequest,
    res: Response,
    next: NextFunction
) => {

    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({
            message: "Token no proporcionado"
        });
    }

    const token = authHeader.split(" ")[1];

    try {

const decoded = jwt.verify(
    token,
    process.env.JWT_SECRET as string
) as {
    id: string;
    rol:string;
};

req.user = {
    id: decoded.id,
    rol: decoded.rol
};

next();

    } catch {

        return res.status(401).json({
            message: "Token inválido"
        });

    }

};