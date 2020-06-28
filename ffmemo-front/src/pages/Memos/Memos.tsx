import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Memo } from 'models/memo.interface';
import { userClient } from 'http/UserClient';
import { gql, ApolloQueryResult } from 'apollo-boost';
//import './Memos.css';
export interface IMemosProps extends RouteComponentProps<{categoryId?: string}> {}

interface IMemosStates {
    categoryId: number;
    memos: Array<Memo>;
    error: string;
}

export default class Memos extends React.Component<IMemosProps, IMemosStates> {
    constructor(props:IMemosProps) {
        super(props);

        this.state = {
            categoryId: 0,
            memos: [],
            error: ''
        }
    }

    componentDidUpdate(prevProps: Readonly<IMemosProps>, prevState: Readonly<IMemosStates>) {
        if (prevState.categoryId !== this.state.categoryId) {
            const query = gql`query {
                memosInDB {
                    id
                    categoryId
                    title
                    content
                }
            }`

            userClient().query({query}).then(
                (result: ApolloQueryResult<Array<Memo>>) => {
                    const data = result.data;

                    this.setState({
                        memos: data
                    })
                }
            ).catch(
                (error) => {
                    this.setState({
                        memos: [],
                        error: 'unknown error'
                    })

                    console.log(error);
                }
            )
        }
    }

    render() {
        const categoryId = this.props.match.params.categoryId;
        if (this.state.categoryId !== Number(categoryId)) {
            this.setState({
                categoryId: Number(categoryId)
            })
            return (<div>Loading...</div>);
        }
        return (
            <div>
                {this.state.error}
                Memos {this.props.match.params.categoryId}
            </div>
        );
    }
}
