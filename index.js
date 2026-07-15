import express from "express";
import router from "./routes/router.js";

const app = express();



app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);


app.listen(8000, () => {
    console.log("Server is running on port 8000");
});
