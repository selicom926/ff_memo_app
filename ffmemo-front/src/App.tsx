import React from 'react';
import logo from './logo.svg';
import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import gql from 'graphql-tag';

export interface IAppProps {}

export default class App extends React.Component<IAppProps> {

    constructor(props: IAppProps) {
        super(props);

        this.handleClickButton = this.handleClickButton.bind(this);
    }

    handleClickButton(event: React.MouseEvent<HTMLButtonElement>) {
        const client = new ApolloClient({
            uri: 'http://localhost:3000/graphql'
        })
        const query = gql`query {
            memosInDB {
                id
                categoryId
                title
                content
            }
        }`

        console.log(query);

        client.query({query}).then(console.log).catch(console.log);
        // const { loading, data} = useQuery(query);

        // if (loading) return;

        // console.log(data);
    }

    render() {
        const client = new ApolloClient({
            uri: 'http://localhost:3000/graphql'
        })

        return (
        <ApolloProvider client={client}>
            <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <button onClick={this.handleClickButton}>Learn React</button>
            </header>
        </ApolloProvider>
        );
    }
}
