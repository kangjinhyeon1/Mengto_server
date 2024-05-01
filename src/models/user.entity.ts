import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class User{
    @PrimaryGeneratedColumn({type: 'bigint'})
    id!: number;

    @Column({type: 'varchar', length: 16})
    name!: string;

    @Column({type: 'varchar', unique: true})
    email!: string;

    @Column({type: 'varchar'})
    password!: string;

    @Column({type: 'boolean', default: false})
    mengto!: boolean;

    @Column({type: 'varchar'})
    introduce!: string;
}