import { v4 as uuidV4 } from "uuid";
import { Entity, PrimaryGeneratedColumn, CreateDateColumn, Column, PrimaryColumn} from "typeorm";

@Entity()
export class User {

    @PrimaryColumn()
    id: string

    @Column()
    name: string

    @Column()
    userName: string

    @Column()
    password: string

    @Column()
    cep: string

    @Column()
    numberAddress: string

    @Column()
    cellphone: string

    @Column()
    whatsApp: string

    @Column()
    isAdmin: boolean

    @CreateDateColumn()
    created_at: Date

    constructor(){
        if(!this.id)
        {
            this.id = uuidV4();
            this.isAdmin = false;
        }
    }

}



