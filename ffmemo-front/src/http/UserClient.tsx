import ApolloClient, { DocumentNode, ApolloQueryResult } from 'apollo-boost';

export const userClient = (uri?: string | null) => new ApolloClient({
    uri: uri || 'http://localhost:3000/graphql',
});