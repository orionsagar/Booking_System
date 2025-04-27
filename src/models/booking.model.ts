import { Table, Column, Model, DataType, ForeignKey } from "sequelize-typescript";
import { Services } from "./services.model.js";
import { Optional } from 'sequelize'; // Import Optional from sequelize

// Define interface for model attributes
interface BookingAttributes {
  id: number;
  serviceId: number;
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  booking_date: Date;
  notes?: string;
}

// Define interface for creation attributes (id is optional)
interface BookingCreationAttributes extends Optional<BookingAttributes, 'id'> {}

@Table({ tableName: "booking", 
    timestamps: false,
    createdAt: true,
    updatedAt: true
 })
export class Booking extends Model<BookingAttributes, BookingCreationAttributes> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id!: number;

  @ForeignKey(() => Services)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  serviceId!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  customer_name!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  customer_email!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  customer_phone!: string;

   @Column({
       type: DataType.DATE,
       allowNull: false,
   })
   booking_date!: Date;

   @Column({
       type: DataType.STRING,
       allowNull: true,
   })
   notes?: string;
}