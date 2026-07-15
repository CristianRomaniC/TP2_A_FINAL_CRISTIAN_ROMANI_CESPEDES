import express from "express";
import router from "./routes/router.js";
import notFoundMiddleware from "./middlewares/notFoundMiddleware.js";

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(router);

app.use(notFoundMiddleware);


app.listen(8000, () => {
    console.log("Servidor corriendo en el puerto 8000");
});
