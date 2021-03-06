let products = [
  {
    id: 1,
    description: "smartphone",
    price: "100",
  },
  {
    id: 2,
    description: "headphones",
    price: "25",
  },
];

module.exports = {
  Query: {
    products: (info, args, { Product }) => Product.get(),
    product: async (info, {id}, { Product }) => Product.getById(id)
  },
  Mutation: {
    addProduct: (info, args, { Product }) => {
      return Product.save(args.product);
    },
  },
};
