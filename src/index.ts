import express from "express";

import { usersRoutes } from "@routes/users.routes";
import { productsRoutes } from "@routes/products.routes";
import { authenticateRoutes } from "@routes/authenticate.routes";
import { categoriesRoutes } from "@routes/categories.routes";

console.log(`Refreshed:  ${Date.now()}`)

const app = express();

app.use(express.json());


app.use("/users", usersRoutes);
app.use("/products", productsRoutes);
app.use("/categories", categoriesRoutes);
app.use(authenticateRoutes);


export { app };
