import { Column, Entity, OneToOne, PrimaryColumn } from "typeorm";
import { SpecData } from "./SpecData";

@Entity()
export class Frecuency {
  @OneToOne((type) => SpecData, (specData) => specData.frecuency)
  @PrimaryColumn({ nullable: false })
  frecuencyId: string;

  @Column()
  description: string;

  @Column()
  search: string;
}
