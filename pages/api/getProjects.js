import connectDB from "@/db/dbSetup";
import { validate as uuidValidate } from 'uuid';
import Project from '../../models/projectsModel';
import jwt from 'jsonwebtoken';
import fs from 'fs';
import { NextResponse } from "next/server";

const publicKey = fs.readFileSync('id_rsa_pub.pem','utf8');

const getProjects = async(req,res) => {
    if (req.method === 'GET') {
        try{
            await connectDB();
            const token = req.headers.authorization.split(' ')[1];
            // decode
            const decode = jwt.verify(token, publicKey, { algorithms: ['RS256'] });
            // validate
            const validation = uuidValidate(decode);
            if(!validation) {
                return NextResponse.json({ message: "Unauthorized" }, { status: 403 });
            }
            const projects_array = await Project.find();
            res.status(200).send(projects_array);
        } catch(err){
            console.log(err);
            return NextResponse.json({ message: "ERROR fetching projects" }, { status: 500 });
        }
    } else {
        res.status(403).send('Wrong method error');
        return NextResponse.json({ message: "Wrong methode error" }, { status: 403 });
    }
}

export default getProjects;