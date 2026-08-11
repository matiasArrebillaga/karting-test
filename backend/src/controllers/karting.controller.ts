import { Response} from 'express';
import kartingService from '../services/karting.services';
import { IKarting } from '../interfaces/karting.interface';
import { AuthRequest } from '../interfaces/auth-request.interface';
class KartingController {
    async getAll(req: AuthRequest, res: Response) {
    try {
        console.log("ENTRÓ AL GET ALL");
        console.log("Usuario autenticado:", req.user);
        const kartings = await kartingService.getAllKartings();

        res.status(200).json(kartings);
    } catch (error) {
        res.status(500).json({
            message: "Error al obtener los kartings",
            error
        });
    }
}
    async getById(req: AuthRequest, res: Response){
        try {
            const id = req.params.id as string;
            const karting = await kartingService.getKartingById(id);
            if (!karting){
                return res.status(404).json({ message: 'Karting no encontrado' });
                
            }
            res.status(200).json(karting);
        }
        catch (error){
            res.status(500).json({message: 'Error al obtener el karting', error});
        }
    }

    async create(req: AuthRequest, res: Response) {
        try {
            const data: IKarting = req.body
            const nuevoKarting = await kartingService.createKarting(data);

            res.status(201).json(nuevoKarting);

        } catch (error) {
            res.status(500).json({
                message: "Error al crear el karting"
            });
        }
    }
    async update (req: AuthRequest, res: Response){
        try {
            const data: Partial<IKarting> = req.body
            const id = req.params.id as string;
            const kartingActualizado = await kartingService.updateKarting(id, data);
            if (!kartingActualizado){
                return res.status(404).json({
                    message:"Karting no encontrado"
                })
            }
            res.status(500).json(kartingActualizado);
        }catch (error){
            res.status(500).json({
                message:"Error al actualizar el karting"
            });
        }
        
    }
    async delete (req: AuthRequest, res: Response){
        try {
            const id = req.params.id as string;
            const kartingEliminado = await kartingService.deleteKarting(id);
            if (!kartingEliminado){
                return res.status(404).json({
                    message: "Karting no encontrado"
                });
            }
        }catch (error){
            res.status(500).json ({
                message:"Error al eliminar el karting"
            });
        }
    }
}   

export default new KartingController();