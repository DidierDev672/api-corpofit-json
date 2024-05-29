const Exercise = require("../models/exercise");
const CategoryService = require("../services/categoryService");
const db = require("../../settings");

const categoryService = new CategoryService();

class ExerciseService {
  constructor() {
    this.exerciseServiceDataBase = [];
  }

  async createExercise(
    idCategory,
    name,
    description,
    repetitions,
    sets,
    duration,
    restTime
  ) {
    const newExerciseId = this.exerciseServiceDataBase.length + 1;
    const getCategory = await categoryService.getCategoryId(idCategory);
    if (getCategory) {
      const category = [];
      getCategory.forEach((element) => {
        category.push(element.name, element.description);
      });
      const newExercise = new Exercise(
        newExerciseId,
        name,
        description,
        repetitions,
        sets,
        duration,
        restTime,
        ...category
      );
      await db.collection("exercise").add({
        ...newExercise,
      });

      this.exerciseServiceDataBase.push(newExercise);
      return newExercise;
    } else {
      console.log("No hay category");
    }
  }

  async getAllExercise() {
    const data = [];
    const docRef = db.collection("exercise");
    const snapshot = await docRef.get();
    snapshot.forEach((doc) => {
      data.push({
        id: doc.id,
        name: doc.data().name,
        description: doc.data().description,
        repetitions: doc.data().repetitions,
        sets: doc.data().sets,
        duration: doc.data().duration,
        restTime: doc.data().restTime,
        category: doc.data().category,
      });
    });
    if (data.length > 0) return data;
  }

  async getExerciseById(id) {
    const data = [];
    const docRef = db.collection("exercise").doc(id);
    const doc = await docRef.get();
    if (!doc.exists) {
      console.log("No such document!");
    } else {
      data.push({
        id: doc.id,
        name: doc.data().name,
        description: doc.data().description,
        repetitions: doc.data().repetitions,
        sets: doc.data().sets,
        duration: doc.data().duration,
        restTime: doc.data().restTime,
        category: doc.data().category,
      });
    }
    if (data.length > 0) return data;
  }

  async updateExercise(
      idCategory,
      id,
        name,
        description,
        repetitions,
        sets,
        duration,
        restTime,

  ) {
      const categoryId = await categoryService.getCategoryId(idCategory);
      const exerciseUpdate = this.getExerciseById(id);
      if (categoryId && exerciseUpdate) {
          exerciseUpdate.name = name;
          exerciseUpdate.description = description;
          exerciseUpdate.repetitions = repetitions;
          exerciseUpdate.sets = sets;
          exerciseUpdate.duration = duration;
        exerciseUpdate.restTime = restTime;
        categoryId.forEach((element) => {
          exerciseUpdate.category = element.name;
        })


          await db.collection("exercise")
              .doc(id)
              .update({
                  ...exerciseUpdate
              });
          return null;
    }
    }

  async deleteExercise(id) {
        await db.collection("exercise").doc(id).delete();
    }
}

module.exports = ExerciseService;
