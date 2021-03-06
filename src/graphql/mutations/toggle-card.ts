import { getRepository } from 'typeorm';
import { Card }          from 'entities/card';


export const toggleCardMutation = {
  async toggleCard(_, { id }) {
    const repository = getRepository(Card);
    const card = await repository.findOne({ id });
    const done = !card.done;
    
    await repository.update(id, { done });
    return {
      ...card,
      done,
    };
  }
};