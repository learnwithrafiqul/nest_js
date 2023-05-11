import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Auth {
    @PrimaryGeneratedColumn({ type: 'int' })
    id: number;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    bio: string;

    @Column()
    test: string;

    @Column()
    test2: string;
}
