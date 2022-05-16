import { MigrationInterface, QueryRunner, Table, TableIndex } from "typeorm"

export class CreateUser1652238152394 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        
        await queryRunner.createTable(
            new Table(
                {
                    name:"user",
                    columns: [
                        {
                            name: "id",
                            type: "uuid",
                            isPrimary: true,
                        },
                        {
                            name: "firstName",
                            type: "varchar",
                        },
                        {
                            name: "lastName",
                            type: "varchar",
                        },
                        {
                            name: "created_at",
                            type: "timestamp",
                            default: "now()"
                        }
                    ],
                })
        );

        await queryRunner.createIndex(
            "user",
            new TableIndex({
                name: "IDX_USER_NAME",
                columnNames: ["firstName"],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    
    
        await queryRunner.dropIndex("user", "IDX_USER_NAME");
        
        await queryRunner.dropTable("user");

    }


}
