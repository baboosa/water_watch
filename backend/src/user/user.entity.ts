import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Consumption } from "../consumption/consumption.entity";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @OneToMany(() => Consumption, (consumption) => consumption.user)
  consumptions: Consumption[];
}
