class Product {
  constructor(model, user) {
    // this.Model === Product
    this.Model = model;
    this.user = user;
    this.writeRights = ["admin", "gerente"];
  }

  async getAll({ pageNumber = 1, pageSize = 5 }) {
    const count = await this.Model.countDocuments({});
    const skips = pageSize * (pageNumber - 1);
    const products = await this.Model.find({}).skip(skips).limit(pageSize);
    return { products, count };
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
