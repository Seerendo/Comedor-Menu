import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Supplier {
  @PrimaryColumn({ nullable: false })
  supplierId: string;

  @Column()
  name: string;

  @Column()
  commercialName: string;

  @Column()
  country: string;

  @Column({ type: "datetime", default: () => "CURRENT_TIMESTAMP" })
  date: Date;
}
