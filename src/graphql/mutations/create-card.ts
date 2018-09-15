import * as uuid from 'uuid/v4';

import { getRepository } from 'typeorm';
import { Card } from 'entities/card';

export const createCardMutation = {
  createCard(_parent, {...input}, _ctx, _info) {
    console.log(input)
    const repository = getRepository(Card);
    console.log('value of: ', input)
    const card = {
      id: uuid(),
      ...input,
    };
    const newCard = repository.create(card);
    return repository.save(card)
  }
};


// async createCard(_, { Card: attrs }) {
//   const repository = getRepository(Card);
//   console.log('value of: ', _, attrs)
//   const card = {
//     id: uuid(),
//     attrs,
//   };
//   await repository.save(card);
//   return card;
// }


// mutation {
// 	createCard(
// 	  card:{
//       title: "test"
//       description: "value"
//     }
//   ){
//     title
//     created_at
//     done
//   }
// }