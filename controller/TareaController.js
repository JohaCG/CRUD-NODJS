import { Tarea } from "../model/TareaModel.js";
import { UserModel } from "../model/UserModel.js";

export const index = async (req, res) => {
  try {
    const user = await UserModel.findAll();
    const tabla = await Tarea.findAll();
    res.render("home", { usuario: user, tabla: tabla });
  } catch (er) {
    res.render("home", { error: er.message });
  }
};

// export const createtarea = async (req, res) => {
//   try {
//     const { descripcion, Horasempleadas,empleadoId } = req.body;

//     if (!(descripcion || Horasempleadas ||empleadoId)) {
//       res.render("home", { mensaje: "Existen campos vacíos o inválidos" });
//     }
//     await Tarea.create({
//       descripcion,
//       Horasempleadas,
//       empleadoId,
//     });
//     res.render("home", { mensaje: "Datos guardados" });
//   } catch (error) {
//     res.render("home", { mensaje: error.message });
//   }
// };
export const createtarea = async (req, res) => {
  try {
    const { descripcion, Horasempleadas, empleadoId } = req.body;

    if (!(descripcion || Horasempleadas || empleadoId)) {
      res.render("home", { mensaje: "Existen campos vacíos o inválidos" });
    }

    // Validar que las horas empleadas no sean mayores que las horas trabajadas del empleado
    const empleado = await UserModel.findByPk(empleadoId);
    if (empleado && Horasempleadas > empleado.Horastrabajadas) {
      res.render("home", { mensaje: "Las horas empleadas no pueden ser mayores que las horas trabajadas del empleado" });
      return; // Detener la ejecución si la validación falla
    }
    await Tarea.create({
      descripcion,
      Horasempleadas,
      empleadoId,
    });
    res.render("home", { mensaje: "Datos guardados" });
  } catch (error) {
    res.render("home", { mensaje: error.message });
  }
};
