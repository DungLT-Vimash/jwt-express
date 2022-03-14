const userController = require("../controllers/userController");
const {
  verifyToken,
  verifyTokenAndAdmin,
  verifyTokenAndUserAuthorization,
} = require("../controllers/verifyToken");

const router = require("express").Router();
//GET ALL USERS
router.get("/", verifyToken, userController.getAllUsers);

//DELETE USER
router.delete(
  "/:id",
  verifyTokenAndUserAuthorization,
  userController.deleteUser
);

//GET ALL TODOS
router.get("/todo", verifyToken, userController.getAllTodo);
//POST CREATE TODOS
router.post("/create-todo", verifyToken, userController.createTodo);
//POST UPDATE TODOS
router.patch("/update-todo/:id", verifyToken, userController.updateTodo);
//POST DELETE TODOS
router.delete("/delete-todo/:id", verifyToken, userController.deleteTodo);

module.exports = router;
