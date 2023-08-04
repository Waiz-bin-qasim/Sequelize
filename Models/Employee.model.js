import { DataTypes } from "sequelize";
import sequelize from "../Config/DbConfig.js";

export const Employee = sequelize.define("employee",{
    emp_id:{
        primaryKey:true,
        type:DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:false,
        unique:true
    },
    emp_name:{
        type:DataTypes.TEXT,
        allowNull:false,
        unique:true,
    },
    emp_salary:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    emp_gender:{
        type:DataTypes.TEXT,
        allowNull:false,
    },
},{
    tableName:"employee",
})