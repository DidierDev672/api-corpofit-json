const User = require("../models/user");
const data = require("../../adapters/data/user.json");
const logger = require("../../utils/logger");
const db = require("../../settings");

class UserService {
  constructor() {
    this.users = [];
  }

  async createUser(name, email, age, password) {
    const newUserId = this.users.length + 1;
    const newUser = new User(newUserId, name, email, age, password);
    await db.collection("users").add({
      ...newUser,
    });
    this.users.push(newUser);
    return newUser;
  }

  async getAllUsers() {
    const data = [];
    const docRef = db.collection("users");
    const snapshot = await docRef.get();
    snapshot.forEach((doc) => {
      data.push({
        id: doc.id,
        name: doc.data().name,
        email: doc.data().email,
        age: doc.data().age,
      });
    });

    if (data.length > 0) return data;
  }

  async getUserById(id) {
    const data = [];
    const docRef = db.collection("users").doc(id);
    const doc = await docRef.get();
    if (!doc.exists) {
      console.log("No such document!");
    } else {
      data.push({
        id: doc.id,
        name: doc.data().name,
        email: doc.data().email,
        age: doc.data().age,
      });
    }

    return data;
  }

  async updateUser(id, name, email, age, password) {
    const userToUpdated = this.getUserById(id);
    if (userToUpdated) {
      userToUpdated.name = name;
      userToUpdated.email = email;
      userToUpdated.age = age;
      userToUpdated.password = password;

      await db
        .collection("nutrition")
        .doc(id)
        .update({ ...userToUpdated });
      return userToUpdated;
    }

    return null;
  }

  async deleteUser(id) {
    await db.collection("nutrition").doc(id).delete();
  }
}

module.exports = UserService;
