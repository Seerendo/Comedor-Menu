import { BaseEntity, Column, Entity, OneToOne, PrimaryColumn } from "typeorm";
import { SpecData } from "./SpecData";

export enum field {
  FISICO_QUIMICO = "FISICO & QUIMICO",
  CONTAMINANTE = "CONTAMINANTE",
  INSTRUMENTAL = "INSTRUMENTAL",
  MICROBIOLOGICO = "MICROBIOLOGICO",
  FUNCIONAL = "FUNCIONAL",
  POR_DEFINIR = "POR DEFINIR",
}

@Entity()
export class Param extends BaseEntity {
  @OneToOne((type) => SpecData, (specData) => specData.frecuency)
  @PrimaryColumn({ nullable: false })
  paramId: string;

  @Column()
  description: string;

  @Column()
  search: string;

  @Column({
    default: false,
  })
  cuali: boolean;

  @Column({
    type: "enum",
    enum: field,
    default: field.POR_DEFINIR,
    nullable: false,
  })
  field: field;
}
