import { UserModel } from "../model/UserModel.js";

export const getUser = async (req, res) => {
  try {
    
    const user = await UserModel.findAll();
    res.render("index", { usuario: user });
  } catch (er) {
    res.render("index", { error: er.message });
  }
};

export const index = async (req, res) => {
  try {
    const user = await UserModel.findAll();
    res.render("buscar", { usuario: user });
  } catch (er) {
    res.render("buscar", { error: er.message });
  }
};

export const index1 = async (req, res) => {
  try {
    const user = await UserModel.findAll();
    const totalSalarios = await UserModel.sum('salario');
    res.render("calcular", { usuario: user,totalSalarios:totalSalarios, });
  } catch (er) {
    res.render("calcular", { error: er.message });
  }
};


 export const createUser = async (req, res) => {
 try {
 const { nombre, Departamento, Horastrabajadas, salario, datesingle } =
    req.body;
  if (!(nombre || Departamento || Horastrabajadas || salario || datesingle)) {
     res.render("index", { mensaje: "existen campos vacios" });
  }
  const fechaContratacion = datesingle;
  await UserModel.create({
   nombre,
    Departamento,
  Horastrabajadas,
    salario,
   fechaContratacion,
  });
   res.render("index", { mensaje: "Datos guardados" });
 } catch (error) {
   res.render("index", { mensaje: error.message });
 }
 };

export const getUsersByDepartment = async (req, res) => {
  try {
    const departmento = req.body.departamento;
    const filteredUsers = await UserModel.findAll({
      where: { Departamento: departmento },
    });

    res.render("buscar", {
      filteredUsers: filteredUsers,
      usuario: filteredUsers,
    });
  } catch (error) {
    console.error("Error al filtrar usuarios por departamento:", error);
    res.render(500).json({ error: error.message });
  }
};

 export const Ordenar = async (req, res) => {
   try {
     // Realizar la consulta utilizando Sequelize
     const users = await UserModel.findAll({
       order: [["fechaContratacion", "ASC"]], // Ordenar por fecha de contratación
     });
   } catch (error) {
     console.error("Error al calcular el total de salarios:", error);
     res.render(500).json({ error: error.message });
   }
 };



