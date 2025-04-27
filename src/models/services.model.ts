import { Table, Column, Model, DataType } from 'sequelize-typescript';
import { Optional } from 'sequelize'; // Import Optional from sequelize

interface ServiceAttributes {
    id: number;
    name: string;
  }
  
interface ServiceCreationAttributes extends Optional<ServiceAttributes, 'id'> {}

@Table({ 
    tableName: 'services',
    timestamps: true, // Enable timestamps if needed
    createdAt: 'created_at',
    updatedAt: 'updated_at', 
 })
export class Services extends Model<ServiceAttributes, ServiceCreationAttributes> {
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    })
    id!: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    description!: string;
}