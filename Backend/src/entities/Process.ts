import { Column, Entity, OneToOne, PrimaryColumn } from "typeorm";
import { SpecData } from "./SpecData";

@Entity()
export class Process {
  @OneToOne((type) => SpecData, (specData) => specData.process)
  @PrimaryColumn({ nullable: false })
  processId: string;

  @Column()
  description: string;

  @Column()
  search: string;
}
