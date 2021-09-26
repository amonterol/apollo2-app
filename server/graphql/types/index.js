exports.productTypes = `
    type  Product{
      _id: ID
      name: String
      description: String
      status:String
      price: String
      category: String
      subcategory: String
      cantidad: String
      photo: String

    }

    type PagProduct {
      products: [Product]
      count: Int
    }

    input ProductInput {
      name: String!
      description: String!
      status:String!
      price: String!
      category: String!
      subcategory: String!
      cantidad: String!
      photo: String!
    }

    type HighlightResponse {
      products: [Product]
    }
 

`;

exports.userTypes = `
  
    type User {
      _id: ID,
      username: String
      name: String
      email: String
      role: String
    }

    input SignUpInput {
        username: String!
        name: String
        email: String!
        password: String!
        passwordConfirmation: String!
      }

      input SignInInput {
        email: String!
        password: String!
      }
`;
