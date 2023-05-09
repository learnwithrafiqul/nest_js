import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  username: string;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  password: string;
}
