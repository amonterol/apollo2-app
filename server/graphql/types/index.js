exports.productTypes = `
type  Product{
  _id: ID
  name: String
  description: String
  status: String
  price: Int
  photo: String

}
input ProductInput {
  name: String
  description: String
  status: String
  price: Int
  photo: String
}
`;
