const express = require("express");
const UserService = require("../../domain/services/userService");
const logger = require("../../utils/logger");

const router = express.Router();
const userService = new UserService();

// Crear usuario
router.post("/users", async (req, res) => {
  const { name, email, age, password } = req.body;
  const user = await userService.createUser(name, email, age, password);
  res.status(201).json(user);
});

// Obtener todos los usuarios
router.get("/users", async (req, res) => {
  const allUsers = await userService.getAllUsers();
  res.status(200).json(allUsers);
});

// Obtener usuario por ID
router.get("/user/:id", async (req, res) => {
  const userId = req.params.id;
  const user = await userService.getUserById(userId);
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({ message: "Usuario no encontrado" });
  }
});

router.put("/user/:id", async (req, res) => {
  const userId = req.params.id;
  const { name, email, age, password } = req.body;
  const updatedUser = await userService.updateUser(
    userId,
    name,
    email,
    age,
    password
  );
  if (updatedUser) {
    res.status(200).json(updatedUser);
  } else {
    res.status(404).json({ message: "Usuario no encontrado" });
  }
});

module.exports = router;
