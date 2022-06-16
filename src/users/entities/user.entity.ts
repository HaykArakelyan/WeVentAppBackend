import { Entity } from "typeorm";
import { Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    login: string;

    @Column()
    password: string;
}