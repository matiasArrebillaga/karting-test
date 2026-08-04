import Karting from "../models/karting.model";
import { IKarting } from "../interfaces/karting.interface";
class KartingService {


    async getAllKartings() {
        return await Karting.find();
    }


    async getKartingById(id: string) {
        return await Karting.findById(id);
    }


    async createKarting(data: IKarting) {
        return await Karting.create(data);
    }


    async updateKarting(id: string, data: Partial<IKarting>) {
        return await Karting.findByIdAndUpdate(id, data, {
            new: true
        });
    }


    async deleteKarting(id: string) {
        return await Karting.findByIdAndDelete(id);
    }

}

export default new KartingService();