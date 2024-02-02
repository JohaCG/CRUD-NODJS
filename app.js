import express from "express";
import hbs from "hbs";
import path from "path";
import { fileURLToPath } from "url";
import { sequelize } from "./db/conexion.js";
import bodyParser from "body-parser";
import routerUser from "./router/UserRouter.js";
import routerTarea from "./router/tareaRouter.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = 3000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "hbs");
app.use("/", routerUser);
app.use("/", routerTarea);
app.use("/users", routerTarea);
//Ruta estatica
app.use(express.static(__dirname + "/public"));
hbs.registerPartials(__dirname + "/views/partials", function (err) {});
app.post('/save',function(req,res){
  res.render('index')
});

app.post('/savetarea',function(req,res){
   res.render('home')
});



app.post('/buscar',function(req,res){
  res.render('buscar')
});



const conexion = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ force : false});
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
conexion();
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
