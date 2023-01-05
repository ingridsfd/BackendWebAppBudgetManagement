import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
//parsear x-www-from-urlencoded
app.use(express.urlencoded({ extended: false }));

//app.use("/api/pollos-hermanos/product", productRouter);

export default app;