import express from "express";

import { usersRoutes } from "@routes/users.routes";
import { productsRoutes } from "@routes/products.routes";
import { authenticateRoutes } from "@routes/authenticate.routes";

console.log(`Refresed:  ${Date.now()}`)

const app = express();

app.use(express.json());


app.use("/users", usersRoutes);
app.use("/products", productsRoutes);
app.use(authenticateRoutes);


export { app };
