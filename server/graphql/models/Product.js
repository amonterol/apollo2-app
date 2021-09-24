class Product {
  constructor(model, user) {
    // this.Model === Product
    this.Model = model;
    this.user = user;
    this.writeRights = ["admin", "gerente"];
  }

  getAll() {
    return this.Model.find({});
  }

  getGestionProductos() {
    return this.Model.find({});
  }

  getById(id) {
    return this.Model.findById(id);
  }

  create(data) {
    if (!this.user || !this.writeRights.includes(this.user.role)) {
      throw new Error("No authorized!");
    }
    data.user = this.user;
    return this.Model.create(data);
  }

  findAndUpdate(id, data) {
    return this.Model.findOneAndUpdate({ _id: id }, data, {
      new: true,
      runValidators: true,
    });
  }

  findAndDelete(id) {
    return this.Model.findOneAndRemove({ _id: id });
  }
}

module.exports = Product;
