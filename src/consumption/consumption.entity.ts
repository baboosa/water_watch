import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from '../user/user.entity';

@Entity()
export class Consumption {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('decimal')
  amount: number;

  @Column()
  readingDate: Date;

  @ManyToOne(() => User, (user) => user.consumptions, { onDelete: 'CASCADE' })
  user: User;
}
