import { Sequelize } from "sequelize-typescript";
import { Services } from "../models/services.model.js";
import { Booking } from "../models/booking.model.js";
export const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./data/db.sqlite",
    models: [Services, Booking], // Add your models here
});
