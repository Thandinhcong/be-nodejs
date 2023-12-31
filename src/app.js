import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import routerUser from "./routes/user";
import routerCategories from "./routes/categories";
import routerProduct from "./routes/products";
import routerSizes from "./routes/sizes";
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api", routerUser);
app.use("/api", routerCategories);
app.use("/api", routerProduct);
app.use("/api", routerSizes);

mongoose.connect('mongodb://127.0.0.1:27017/new')


export const viteNodeApp = app;