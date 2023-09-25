import { DataSource } from "typeorm";
import { Param } from "./entities/Param";
import { Process } from "./entities/Process";
import { Spec } from "./entities/Spec";
import { Unit } from "./entities/Unit";
import { User } from "./entities/User";
import { Frecuency } from "./entities/Frecuency";
import { Supplier } from "./entities/Supplier";
import { SpecData } from "./entities/SpecData";

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

export const AppDataSource = new DataSource({
  type: "mysql",
  host: DB_HOST,
  port: Number(DB_PORT) || 3306,
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  //Synchronize desactivar en producción
  synchronize: true,
  logging: true,
  entities: [Param, Process, Spec, Unit, User, Frecuency, Supplier, SpecData],
});
