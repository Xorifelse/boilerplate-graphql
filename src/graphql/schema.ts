import { makeExecutableSchema } from 'graphql-tools';
import { GraphQLSchema } from 'graphql';
import { Query }     from 'graphql/types/query';
import { types }     from 'graphql/types';
import { resolvers } from 'graphql/resolvers';
import { Mutation }  from 'graphql/types/mutation';

const schemaDefinition = `
    schema {
        query: Query
        mutation: Mutation
    }
`;

const typeDefs = [
    schemaDefinition,
    Query,
    Mutation,
    ...types,
];

export const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});