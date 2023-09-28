import { BaseEntity, Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { Spec } from "./Spec";

@Entity()
export class User extends BaseEntity {
  @PrimaryColumn({ nullable: false })
  userId: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  token: string;

  @OneToMany((type) => Spec, (spec) => spec.user)
  spec: Spec[];
}
