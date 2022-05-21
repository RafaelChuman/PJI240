
import { v4 as uuidV4 } from "uuid";
import { Entity, PrimaryGeneratedColumn, CreateDateColumn, Column, PrimaryColumn, ManyToOne, JoinColumn} from "typeorm";
import { Categories } from "@entity/categories/categories";

@Entity("Products")
export class Products {

    @PrimaryColumn()
    id: string;
    
    @Column()
    name:string;
    
    @Column()
    numberStocke:number;
    
    @Column()
    image:string;
    
    @Column()
    quantityValue:number;

    @Column()
    quantityUnit:string;

    
    @Column()
    value:number;

    @ManyToOne(() => Categories)
    @JoinColumn({name:"categoriesId"})
    category: Categories   

    @Column()
    categoriesId: string

    constructor(){
        if(!this.id)
        {
            this.id = uuidV4();
        }
    }

}




