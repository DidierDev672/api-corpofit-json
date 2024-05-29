const Category = require("../models/category");
const db = require("../../settings");

class CategoryService {
  constructor() {
    this.categoryServiceDataBase = [];
  }

  async createCategory(name, description) {
    const newCategoryId = this.categoryServiceDataBase.length + 1;
    const newCategory = new Category(newCategoryId, name, description);
    await db.collection("category").add({
      ...newCategory,
    });

    this.categoryServiceDataBase.push(newCategory);
    return newCategory;
  }

  async getAllCategory() {
    const data = [];
    const docRef = db.collection("category");
    const snapshot = await docRef.get();
    snapshot.forEach((doc) => {
      data.push({
        id: doc.id,
        name: doc.data().name,
        description: doc.data().description,
      });
    });
    if (data.length > 0) return data;
  }

  async getCategoryId(id) {
    const data = [];
    const docRef = db.collection("category").doc(id);
    const doc = await docRef.get();
    if (!doc.exists) {
      console.log("No such document!");
    } else {
      data.push({
        id: doc.id,
        name: doc.data().name,
        description: doc.data().description,
      });
    }

    if (data.length > 0) return data;
    }

    async updateCategory(id, name, description) {
        const categoryUpdate = this.getCategoryId(id);
        if (categoryUpdate) {
            categoryUpdate.name = name;
            categoryUpdate.description = description;

            await db
                .collection("category")
                .doc(id)
                .update({
                    ...categoryUpdate
                });
            return null;
        }
    }

    async deleteCategory(id) {
        await db.collection("category").doc(id).delete();
    }
}

module.exports = CategoryService;
