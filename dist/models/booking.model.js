var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Table, Column, Model, DataType, ForeignKey } from "sequelize-typescript";
import { Services } from "./services.model.js";
let Booking = class Booking extends Model {
};
__decorate([
    Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    }),
    __metadata("design:type", Number)
], Booking.prototype, "id", void 0);
__decorate([
    ForeignKey(() => Services),
    Column({
        type: DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], Booking.prototype, "serviceId", void 0);
__decorate([
    Column({
        type: DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Booking.prototype, "customer_name", void 0);
__decorate([
    Column({
        type: DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Booking.prototype, "customer_email", void 0);
__decorate([
    Column({
        type: DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Booking.prototype, "customer_phone", void 0);
__decorate([
    Column({
        type: DataType.DATE,
        allowNull: false,
    }),
    __metadata("design:type", Date)
], Booking.prototype, "booking_date", void 0);
__decorate([
    Column({
        type: DataType.STRING,
        allowNull: true,
    }),
    __metadata("design:type", String)
], Booking.prototype, "notes", void 0);
Booking = __decorate([
    Table({ tableName: "booking",
        timestamps: false,
        createdAt: true,
        updatedAt: true
    })
], Booking);
export { Booking };
