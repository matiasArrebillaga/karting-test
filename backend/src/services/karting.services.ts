import Karting from "../models/karting.model";

class KartingService {


    async getAllKartings() {
        return await Karting.find();
    }


    async getKartingById(id: string) {
        return await Karting.findById(id);
    }


    async createKarting(data: any) {
        return await Karting.create(data);
    }


    async updateKarting(id: string, data: any) {
        return await Karting.findByIdAndUpdate(id, data, {
            new: true
        });
    }


    async deleteKarting(id: string) {
        return await Karting.findByIdAndDelete(id);
    }

}

export default new KartingService();