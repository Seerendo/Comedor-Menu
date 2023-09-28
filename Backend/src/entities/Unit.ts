import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Unit extends BaseEntity {
  @PrimaryColumn({ nullable: false })
  unitId: string;

  @Column()
  description: string;

  @Column()
  search: string;
}
