import { Response, Request } from "express";
import User from "../models/user.entity";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { configDotenv } from "dotenv";
import { AppDataSoure } from "../models/dataSoure";

configDotenv();

const IsUser = AppDataSoure.getRepository(User)
const secertKey:string = process.env.SECRET || "jwt-secret-key";

const logIn = async (req:Request, res:Response) =>{
    try{
        const {email, password} = req.body;
        const thisUser = await IsUser.findOneBy({email: email});
        if(!thisUser){
            return res.status(404).json({
                "error": "이메일을 찾을 수 없습니다."
            })
        }

        if(!bcrypt.compareSync(password, thisUser.password)){
            return res.status(409).json({
                "error": "비밀번호가 일치하지 않습니다."
            })
        }

        const accessToken = await generateAccessToken(thisUser.id);

        return res.status(201).json({
            accessToken,
        })
    }
    catch (error){
        return error;
    }
}

const generateAccessToken = async (userId: number) =>{

    const accessToken = jwt.sign({ id: userId }, secertKey ,{ expiresIn: '3h'})

    return accessToken;
}

export {logIn};