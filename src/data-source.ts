import { Products } from "./entity/products/Products";
import { User } from "./entity/Users/User";
import { DataSource } from "typeorm";

export const PostgresDS = new DataSource({
    //migrationsTableName: 'migrations-prod',
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "docker",
    password: "test",
    database: "pji240",
    name: "default",
    entities: [Products, User],
    migrations: ["*.m.ts"],
    //migrationsRun: false,
    //migrationsTransactionMode: "all",
    //synchronize:false
})


PostgresDS.initialize()
    .then(() => {

        console.log(PostgresDS.options.migrations)
        console.log(PostgresDS.migrations.length)

        console.log("Database Initialized");
    })
    .catch((error) => console.log(error))


 


 