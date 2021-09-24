const Product = require("../../database/models/product");

exports.productQueries = {
  product: async (root, { id }, ctx) => {
    return await ctx.models.Product.getById(id);
  },
  products: async (root, args, ctx) => {
    return await ctx.models.Product.getAll();
  },
  gestionProductos: async (root, args, ctx) => {
    return await ctx.models.Product.getGestionProductos().sort({
      name: "desc",
    });
  },
};

exports.productMutations = {
  createProduct: async (root, { input }, ctx) => {
    const createdProduct = await ctx.models.Product.create(input);
    return createdProduct;
  },
  updateProduct: async (root, { id, input }, ctx) => {
    const updatedProduct = await ctx.models.Product.findAndUpdate(id, input);
    return updatedProduct;
  },
  deleteProduct: async (root, { id }, ctx) => {
    const deletedProductId = await ctx.models.Product.findAndDelete({
      _id: id,
    });
    return deletedProductId._id;
  },
};

exports.userQueries = {
  user: (root, args, ctx) => {
    return ctx.models.User.getAuthUser(ctx);
  },
};

exports.userMutations = {
  signUp: async (root, { input }, ctx) => {
    const registeredUser = await ctx.models.User.signUp(input);
    if (!registeredUser) {
      throw new UserInputError("Invalid argument value");
    }
    return registeredUser._id;
  },
  signIn: (root, { input }, ctx) => {
    return ctx.models.User.signIn(input, ctx);
  },
  signOut: (root, args, ctx) => {
    return ctx.models.User.signOut(ctx);
  },
};

/*
const data = {
  products: [
    {
      _id: "1",
      name: "Yeti Hondo",
      description: "soo nice",
      status: "AVAILABLE",
      price: 3423,
      photo:
        "http://res.cloudinary.com/wesbos/image/upload/v1576791335/sick-fits-keystone/5dfbed262849d7961377c2c0.jpg",
    },
    {
      _id: "2",
      name: "Airmax 270",
      description: "Great shoes!",
      status: "AVAILABLE",
      price: 5234,
      photo:
        "http://res.cloudinary.com/wesbos/image/upload/v1579815920/sick-fits-keystone/5e2a13f0689b2835ae71d1a5.jpg",
    },
    {
      _id: "3",
      name: "KITH Hoodie",
      description: "Love this hoodie",
      status: "AVAILABLE",
      price: 23562,
      photo:
        "http://res.cloudinary.com/wesbos/image/upload/v1579815935/sick-fits-keystone/5e2a13ff689b2835ae71d1a7.jpg",
    },
    {
      _id: "4",
      name: "Fanorak",
      description: "Super hip. Comes in a number of colours",
      status: "AVAILABLE",
      price: 252342,
      photo:
        "http://res.cloudinary.com/wesbos/image/upload/v1579815957/sick-fits-keystone/5e2a1413689b2835ae71d1a9.png",
    },
    {
      _id: "5",
      name: "Nike Vapormax",
      description: "Kind of squeaky on some floors",
      status: "AVAILABLE",
      price: 83456,
      photo:
        "http://res.cloudinary.com/wesbos/image/upload/v1579815980/sick-fits-keystone/5e2a142c689b2835ae71d1ab.jpg",
    },
    {
      _id: "6",
      name: "Yeti Cooler",
      description: "Who spends this much on a cooler?!",
      status: "AVAILABLE",
      price: 75654,
      photo:
        "http://res.cloudinary.com/wesbos/image/upload/v1579815999/sick-fits-keystone/5e2a143f689b2835ae71d1ad.jpg",
    },
    {
      _id: "7",
      name: "Naked and Famous Denim",
      description: "Japanese Denim, made in Canada",
      status: "AVAILABLE",
      price: 10924,
      photo:
        "http://res.cloudinary.com/wesbos/image/upload/v1579816030/sick-fits-keystone/5e2a145d689b2835ae71d1af.jpg",
    },
    {
      _id: "8",
      name: "Rimowa Luggage",
      description: "S T E A L T H",
      status: "AVAILABLE",
      price: 47734,
      photo:
        "http://res.cloudinary.com/wesbos/image/upload/v1579816060/sick-fits-keystone/5e2a147b689b2835ae71d1b1.png",
    },
    {
      _id: "9",
      name: "Black Hole ",
      description: "Outdoorsy ",
      status: "AVAILABLE",
      price: 4534,
      photo:
        "http://res.cloudinary.com/wesbos/image/upload/v1579816093/sick-fits-keystone/5e2a149b689b2835ae71d1b3.jpg",
    },
    {
      _id: "10",
      name: "Nudie Belt",
      description: "Sick design",
      status: "AVAILABLE",
      price: 5234,
      photo:
        "http://res.cloudinary.com/wesbos/image/upload/v1579816114/sick-fits-keystone/5e2a14b1689b2835ae71d1b5.jpg",
    },
    {
      _id: "11",
      name: "Goose",
      description: "Keep warm.",
      status: "AVAILABLE",
      price: 74544,
      photo:
        "http://res.cloudinary.com/wesbos/image/upload/v1579816128/sick-fits-keystone/5e2a14bf689b2835ae71d1b7.jpg",
    },
    {
      _id: "12",
      name: "Ultraboost",
      description: "blacked out",
      status: "AVAILABLE",
      price: 6344,
      photo:
        "http://res.cloudinary.com/wesbos/image/upload/v1579816141/sick-fits-keystone/5e2a14cc689b2835ae71d1b9.jpg",
    },
  ],
};
*/
