import User from "../models/user.model";
import { IUser } from "../interfaces/user.interface";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/jwt";

class AuthService{
    async register (data: IUser){
        const existingUser = await User.findOne({
            email: data.email
        });
        if (existingUser){
            throw new Error ("El email ya esta registrado");
        }
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const userData = {...data, password: hashedPassword
    };
        return await User.create(userData);
    }
    async login (email: string, password:string){
        const user = await User.findOne ({email});
        if (!user){
            throw new Error ("Email o contraseña incorrectos");
        }
        const passwordCorrecta= await bcrypt.compare (
            password, user.password);
        if (!passwordCorrecta){
            throw new Error ("Email o contraseña incorecta")
        }
        const token= generateToken(user.id);
        return {token,user};
    }
}
export default new AuthService();