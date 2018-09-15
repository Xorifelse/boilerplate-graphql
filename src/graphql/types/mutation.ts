export const Mutation = `
  type Mutation {
    toggleCard (
      id: String!
    ): Card
        
    updateCard (
      id: String!
      patch: CardPatch!
    ): Card

    createCard (
      title: String!
      description: String
    ): Card
  }
`;