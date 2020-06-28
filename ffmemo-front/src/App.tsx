import React from 'react';
import './App.css';
import gql from 'graphql-tag';
import Sidebar from 'components/Sidebar/Sidebar'
import { ApolloProvider } from 'react-apollo';
import { userClient } from 'http/UserClient';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Top from 'pages/Top/Top';
import Memos from 'pages/Memos/Memos';
import Main from 'components/Main/Main';

export interface IAppProps {}

export default class App extends React.Component<IAppProps> {

    render() {
        const client = userClient();
        
        return (
            <ApolloProvider client={client}>
                <Router>
                    <Sidebar title={'memo'}></Sidebar>
                    <Main>
                        <Route exact path="/" component={Top}></Route>
                        <Route path="/memo/:categoryId" component={Memos}></Route>
                    </Main>
                </Router>
            </ApolloProvider>
        );
    }
}
