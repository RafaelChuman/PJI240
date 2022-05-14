import { DataSource } from "typeorm";

export const PostgresDataSource = new DataSource({
    migrationsTableName: 'migrations',
    type: "postgres",
    host: "pg_pji240",
    port: 5432,
    username: "docker",
    password: "test",
    database: "pji240",
    logging: false,
    synchronize: false,
    name: 'default',
    entities: ["./src/database/entity/**/*.ts"],
    migrations: ["./src/database/migration/*.ts"]
})


PostgresDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })