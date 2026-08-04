import {Request, Response} from "express";
import authService from "../services/auth.services";
import { IUser } from "../interfaces/user.interface";

class AuthController {
    async register (req: Request, res: Response){
        try{
            const data: IUser = req.body;
            const user = await authService.register(data);
            res.status(201).json(user);
        }catch(error){
            res.status(400).json({
                message:error instanceof Error ? error.message :"error"
            });

        }
    }
    async login (req: Request, res: Response){
        try{
            const {email, password}= req.body;
            const user = await authService.login(email, password);
            res.status(200).json(user);
        }catch(error){
            res.status(401).json({
                message: error instanceof Error ? error.message: "Error"
            });
        }
    }
}
export default new AuthController();