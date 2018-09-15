const path = require('path');
import { createConnection } from 'typeorm';

// Entities
import { Card } from 'entities/card';

const DSN = process.env.DSN || 'postgres://postgres:secret@localhost:5432/graphql'

export const databaseInitializer = async () => {
  return await createConnection({
    type: 'postgres',
    url: DSN,
    entities: [
      Card,
    ],
    logging: ['query', 'error'],
    synchronize: true,
  }).then(() => {
    console.log(`Connected to: "${DSN}"`);
  }).catch(err => {
    console.error(err)
  });
};