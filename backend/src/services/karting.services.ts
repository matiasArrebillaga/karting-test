import Karting from "../models/karting.model";

class KartingService {

    // Obtener todos los kartings
    async getAllKartings() {
        return await Karting.find();
    }

    // Obtener un karting por ID
    async getKartingById(id: string) {
        return await Karting.findById(id);
    }

    // Crear un karting
    async createKarting(data: any) {
        return await Karting.create(data);
    }

    // Actualizar un karting
    async updateKarting(id: string, data: any) {
        return await Karting.findByIdAndUpdate(id, data, {
            new: true
        });
    }

    // Eliminar un karting
    async deleteKarting(id: string) {
        return await Karting.findByIdAndDelete(id);
    }

}

export default new KartingService();