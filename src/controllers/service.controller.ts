import { Request, Response } from "express";
import { Services } from "../models/services.model.js";

export const getServices = async (req: Request, res: Response) => {
    try {
        const services = await Services.findAll();
        res.json(services);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};