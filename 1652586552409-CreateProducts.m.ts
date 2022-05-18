import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateProducts1652586552409 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        const newProductTableOptions = {
            name:"Products",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true,
                },
                {
                    name: "category",
                    type: "varchar",
                },
                {
                    name: "name",
                    type: "varchar",
                },
                {
                    name: "numberStocke",
                    type: "integer",
                },
                {
                    name: "image",
                    type: "varchar",
                },
                {
                    name: "quantity",
                    type: "integer",
                },

                {
                    name: "value",
                    type: "integer",
                }
            ],
        }


        const newProductTable = new Table(newProductTableOptions);

        await queryRunner.createTable(newProductTable);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropTable("Products");
    }

}
