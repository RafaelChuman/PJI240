import express from "express";

import { usersRoutes } from "@routes/users.routes";
import { productsRoutes } from "@routes/products.routes";
import { authenticateRoutes } from "@routes/authenticate.routes";
import { categoriesRoutes } from "@routes/categories.routes";
import { treatmentsRoutes } from "./routes/treatments.routes";
import { ensureAuthenticated } from "./midlewares/ensureAuthenticated";


console.log(`Refreshed:  ${Date.now()}`)

const app = express();

app.use(express.json());


app.use(authenticateRoutes);
app.use("/users", usersRoutes);

//Midleware para validar a autenticação de todas as rotas seguintes
app.use(ensureAuthenticated);

app.use("/products", productsRoutes);
app.use("/categories", categoriesRoutes);
app.use("/treatments", treatmentsRoutes);



export { app };
