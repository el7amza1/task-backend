import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class User {
    static getDb() {
        throw new Error("Method not implemented.")
    }
    @PrimaryGeneratedColumn()
    id?: number 

    @Column()
    userName!: string

    @Column()
    password!: string
}