const express = require("express");
const CategoryService = require("../../domain/services/categoryService");
const router = express.Router();

const categoryService = new CategoryService();

router.post("/category", async (req, res) => {
    const { name, description } = req.body;
    const newCategory = await categoryService.createCategory(name, description);
    res.status(201).json(newCategory);
});

router.get("/categorys", async (req, res) => {
    const allCategory = await categoryService.getAllCategory();
    res.status(200).json(allCategory);
});

router.get("/category/:id", async (req, res) => {
    const categoryId = req.params.id;
    const category = await categoryService.getCategoryId(categoryId);
    if (category) {
        res.status(200).json(category);
    } else {
        res.status(404).json({ message: "Categoría no encontrada" });
    }
});

router.put("/category/:id", async (req, res) => {
    const categoryId = req.params.id;
    const { name, description } = req.body;
    const updateCategory = await categoryService.updateCategory(categoryId, name, description);
    if (updateCategory) {
        res.status(200).json(updateCategory);
    } else {
        res.status(404).json({ message: "Category no encontrada" });
    }
});

router.delete("/category/:id", async (req, res) => {
    const categoryId = req.params.id;
    const categoryDelete = await categoryService.deleteCategory(categoryId);
    if (categoryDelete) {
        res.status(204).send();
    } else {
        res.status(404).json({ message: "Category no encontrada" });
    }
});

module.exports = router;
