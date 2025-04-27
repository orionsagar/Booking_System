import { Request, Response } from "express";
import { Booking } from "../models/booking.model.js";
import { CreateBookingDto } from '../dtos/booking.dtos.js';


export const createBooking = async (req: Request, res: Response) => {
    try {
        const bookingData: CreateBookingDto = req.body;
        const newBooking = await Booking.create({ ...bookingData } as any);
        res.status(201).json(newBooking);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};