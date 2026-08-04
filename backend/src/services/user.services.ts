import User from "../models/user.model";
import { IUser } from "../interfaces/user.interface";

class UserService {
    async getAllUsers(){
        return await User.find();
    }
    async getUserbyId (id: string){
        return await User.findById(id);
    }
    async createUser (data: IUser) {
        return await User.create(data);
    }
    async updateUser(id:string, data:Partial<IUser>){
        return await User.findByIdAndUpdate(id, data,{new:true});
    }
    async deleteUser (id:string){
        return await User.findByIdAndDelete(id)
    }
}
export default new UserService();