import connectDB from "@/db/dbSetup";
import { validate as uuidValidate } from "uuid";
import Project from "../../models/projectsModel";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

const { PUB_KEY } = JSON.parse(process.env.PUBLIC_KEY);

/**
 * Serverless function to return all my projects
 */

const getProjects = async (req, res) => {
  if (req.method === "GET") {
    try {
      // connect to the database
      await connectDB();
      const token = req.headers.authorization.split(" ")[1];
      // decode
      const decode = jwt.verify(token, PUB_KEY, { algorithms: ["RS256"] });
      // validate
      const validation = uuidValidate(decode);
      if (!validation) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 403 });
      }
      const projects_array = await Project.find();
      res.status(200).send(projects_array);
    } catch (err) {
      return NextResponse.json(
        { message: "ERROR fetching projects" },
        { status: 500 }
      );
    }
  } else {
    res.status(403).send("Wrong method error");
    return NextResponse.json(
      { message: "Wrong methode error" },
      { status: 403 }
    );
  }
};

export default getProjects;
