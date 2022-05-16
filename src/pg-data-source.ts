import { Products } from "entity/products/Products";
import { User } from "entity/Users/User";
import { DataSource } from "typeorm";

export const PostgresDataSource = new DataSource({
    migrationsTableName: 'migrations-prod',
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "docker",
    password: "test",
    database: "pji240",
    name: 'default',
    entities: [Products, User],
    migrations: [],
    migrationsRun: true,
    migrationsTransactionMode: "all",
    synchronize:true
})


PostgresDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })