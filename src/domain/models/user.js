class User {
  constructor(id, name, email, age, password) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.age = age;
    this.password = password;
    this.createdAt = new Date();
    this.lastLoginAt = null;
    this.isActive = true;
  }

  checkPassword(password) {
    return (this.password = password);
  }

  updateLastLogin() {
    this.lastLoginAt = new Date();
  }
}

module.exports = User;
