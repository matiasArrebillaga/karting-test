import jwt from "jsonwebtoken";

export const generateToken = (
    id: string,
    rol: string
): string => {

    return jwt.sign(
        {
            id,
            rol
        },
        process.env.JWT_SECRET as string,
        {
            expiresIn: "1h"
        }
    );

};