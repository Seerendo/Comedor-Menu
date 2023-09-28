import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryColumn,
} from "typeorm";
import { Frecuency } from "./Frecuency";
import { Param } from "./Param";
import { Process } from "./Process";

@Entity()
export class SpecData extends BaseEntity {
  @PrimaryColumn()
  id: string;

  @Column({ nullable: true })
  minLot: number;

  @Column({ nullable: true })
  maxLot: number;

  @Column({ nullable: true })
  minClient: number;

  @Column({ nullable: true })
  maxClient: number;

  @Column({ nullable: true })
  minPlant: number;

  @Column({ nullable: true })
  maxPlant: number;

  @Column({ nullable: true })
  minCharge: number;

  @Column({ nullable: true })
  maxCharge: number;

  @OneToOne((type) => Frecuency, (frecuency) => frecuency.frecuencyId)
  @JoinColumn({ name: "frecuencyId" })
  frecuency: Frecuency;

  @OneToOne((type) => Param, (param) => param.paramId)
  @JoinColumn({ name: "paramId" })
  param: Param;

  @OneToOne((type) => Process, (process) => process.processId)
  @JoinColumn({ name: "processId" })
  process: Process;
}
