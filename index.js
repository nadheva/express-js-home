

//import express
import express from "express";
//import routes
import Router from "./routes/routes.js";
//init express
const app = express();

app.use(Router);

//listen on port
app.listen(3000, () => console.log('Server running at http://localhost:3000'));