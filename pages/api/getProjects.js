import connectDB from "@/db/dbSetup";
import { validate as uuidValidate } from 'uuid';
import Project from '../../models/projectsModel';
import jwt from 'jsonwebtoken';
import fs from 'fs';

const publicKey = fs.readFileSync('id_rsa_pub.pem','utf8');

const GetProjects = async(req,res) => {
    try{
        if (req.method === 'GET') {
            await connectDB();
            const token = req.headers.authorization.split(' ')[1];
            // decode
            const decode = jwt.verify(token, publicKey, { algorithms: ['RS256'] });
            // validate
            const validation = uuidValidate(decode);
            if(validation) {
                const projects_array = await Project.find();
                res.status(200).send(projects_array);
            } else {
                res.status(403).send({ message: "Unauthorized" });
            }
        } else {
            req.status(403).send('Wrong method error');
        }
    } catch(err){
        console.log(err);
        res.status(500).send('SERVER ERROR', err);
    }
}

export default GetProjects;