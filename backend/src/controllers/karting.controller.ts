import {Request, Response} from 'express';
import kartingService from '../services/karting.services';

class KartingController {
    async getAll(req: Request, res: Response){
        try {
            const kartings = await kartingService.getAllKartings();
            res.status(200).json(kartings);
        } catch (error) {
            res.status(500).json({ message: 'Error al obtener los kartings', error });
        }
    }
    async getById(req: Request, res: Response){
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
    async update (req: Request, res: Response){
        try {
            const id = req.params.id as string;
            const kartingActualizado = await kartingService.updateKarting(id, req.body);
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
    async delete (req: Request, res: Response){
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