const Tip = require("../models/tip");
const db = require("../../settings");

class TipService {
  constructor() {
    this.tipServiceDataBase = [];
  }

  async createTip(title, content, photo) {
    const newTipId = this.tipServiceDataBase.length + 1;
    const newTip = new Tip(newTipId, title, content, photo);
    await db.collection("tip").add({
      ...newTip,
    });

    this.tipServiceDataBase.push(newTip);
    return newTip;
  }

  async getAllTip() {
    const data = [];
    const docRef = db.collection("tip");
    const snapshot = await docRef.get();
    snapshot.forEach((doc) => {
      data.push({
        id: doc.id,
        title: doc.data().title,
        content: doc.data().content,
        photo: doc.data().photo
      });
    });

    if (data.length > 0) return data;
  }

  async getTipById(id) {
    const data = [];
    const docRef = db.collection("tip").doc(id);
    const doc = await docRef.get();
    if (!doc.exists) {
      console.log("No such document!");
    } else {
      data.push({
        id: doc.id,
        title: doc.data().title,
        content: doc.data().content,
        photo: doc.data().photo,
      });
    }
    if (data.length > 0) return data;
  }

  async updateTip(id, title, content, photo) {
    const tipUpdate = this.getTipById(id);
    if (tipUpdate) {
      tipUpdate.title = title;
      tipUpdate.content = content;
      tipUpdate.photo = photo;

      await db
        .collection("tip")
        .doc(id)
        .update({
          ...tipUpdate,
        });

      return null;
    }
  }

  async deleteNutrition(id) {
    await db.collection("tip").doc(id).delete();
  }
}

module.exports = TipService;
