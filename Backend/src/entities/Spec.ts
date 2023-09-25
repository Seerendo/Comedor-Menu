import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { User } from "./User";

export enum Status {
  DESARROLLO = "DESARROLLO",
  VIGENTE = "VIGENTE",
  HISTORICO = "HISTORICO",
  APROBACION = "APROBACIÓN",
  OBSOLETO = "OBSOLETO",
  APROBADO = "APROBADO",
}

export enum specType {
  ALIMENTOS = "ESPEC. ALIMENTOS",
  HCP = "ESPEC. HCP",
  EMPAQUE = "ESPEC. EMPAQUE",
  SIN_ESPECIFICACION = "SIN ESPECIFICACION",
}

@Entity()
export class Spec {
  @PrimaryColumn({ nullable: false })
  specId: string;

  @Column({ nullable: false })
  description: string;

  @Column({
    type: "enum",
    enum: Status,
    default: Status.DESARROLLO,
  })
  status: Status;

  @Column({
    type: "enum",
    enum: specType,
    default: specType.SIN_ESPECIFICACION,
    nullable: false
  })
  specType: specType;

  @ManyToOne((type) => User, (user) => user.spec)
  @JoinColumn({name: "userId",})
  user: User;
}
