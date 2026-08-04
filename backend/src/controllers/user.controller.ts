import {Request, Response} from 'express';
import userService from '../services/user.services';
import { IUser } from '../interfaces/user.interface';
class userController {
    async getAll(req: Request, res: Response){
        try {
            const users = await userService.getAllUsers();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ message: 'Error al obtener los users', error });
        }
    }
    async getById(req: Request, res: Response){
        try {
            const id = req.params.id as string;
            const user = await userService.getUserbyId(id);
            if (!user){
                return res.status(404).json({ message: 'user no encontrado' });
                
            }
            res.status(200).json(user);
        }
        catch (error){
            res.status(500).json({message: 'Error al obtener el user', error});
        }
    }

    async create(req: Request, res: Response) {
        try {
            const data: IUser = req.body
            const nuevouser = await userService.createUser(data);

            res.status(201).json(nuevouser);

        } catch (error) {
            res.status(500).json({
                message: "Error al crear el user"
            });
        }
    }
    async update (req: Request, res: Response){
        try {
            const data: Partial<IUser> = req.body
            const id = req.params.id as string;
            const userActualizado = await userService.updateUser(id, data);
            if (!userActualizado){
                return res.status(404).json({
                    message:"user no encontrado"
                })
            }
            res.status(500).json(userActualizado);
        }catch (error){
            res.status(500).json({
                message:"Error al actualizar el user"
            });
        }
        
    }
    async delete (req: Request, res: Response){
        try {
            const id = req.params.id as string;
            const userEliminado = await userService.deleteUser(id);
            if (!userEliminado){
                return res.status(404).json({
                    message: "user no encontrado"
                });
            }
        }catch (error){
            res.status(500).json ({
                message:"Error al eliminar el user"
            });
        }
    }
}   

export default new userController();