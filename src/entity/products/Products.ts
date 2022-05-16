
import { v4 as uuidV4 } from "uuid";
import { Entity, PrimaryGeneratedColumn, CreateDateColumn, Column, PrimaryColumn} from "typeorm";

@Entity()
export class Products {

    @PrimaryColumn()
    id: string;
    
    @Column()
    category: string;
    
    @Column()
    name:string;
    
    @Column()
    numberStocke:number;
    
    @Column()
    image:string;
    
    @Column()
    quantity:number;
    
    @Column()
    value:number;

    constructor(){
        if(!this.id)
        {
            this.id = uuidV4();
        }
    }

}




