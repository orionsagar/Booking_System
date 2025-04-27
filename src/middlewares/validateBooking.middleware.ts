import { Request, Response, NextFunction } from "express";

export const validateBooking = (req: Request, res: Response, next: NextFunction): void => {
    const { serviceId, customer_name, customer_email, customer_phone } = req.body;

    if (!serviceId || !customer_name || !customer_email || !customer_phone) {
        res.status(400).json({ error: "Missing required fields" });
    } else {
        next();
    }

    // Additional validation logic can be added here
    // For example, checking if the serviceId exists in the database, etc.
    // This is a placeholder for actual validation logic
    // if (!isValidServiceId(serviceId)) {
    //     return res.status(400).json({ error: "Invalid service ID" });
    // }
};