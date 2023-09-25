import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Unit {
  @PrimaryColumn({ nullable: false })
  unitId: string;

  @Column()
  description: string;

  @Column()
  search: string;
}
