import React from 'react';
import './CategoryList.css';
import { Query, QueryResult } from 'react-apollo';
import { gql } from 'apollo-boost';
import { Mcategory } from 'models/memo.interface';
import { Link } from 'react-router-dom';

const getCategory = gql`query {
    mcategories {
        id
        name
    }
}`;

interface ICategoryListProps {
    handleClick?: (categoryId: number) => void;
}

export default class CategoryList extends React.Component<ICategoryListProps> {

    constructor(props: ICategoryListProps) {
        super(props);

        this._handleClick = this._handleClick.bind(this);
    }

    _handleClick(categoryId: number) {
        if (this.props.handleClick) {
            this.props.handleClick(categoryId);
        }
    }

    render() {
        return (
            <Query query={getCategory}>    
                {({loading, data}: QueryResult<any, Record<string, [Mcategory]>>) => {
                    if (loading) return <p>Loading...</p>

                    const categories: [Mcategory] = data.mcategories;

                    return (
                        <ul className={'categorylist_base'}>
                            {categories.map((category: Mcategory) => {
                                return <li key={category.id} onClick={() => {this._handleClick(category.id)}}>
                                    <Link to={`/memo/${category.id}`} className={'categorylist_link'} >{category.name}</Link>
                                </li>
                            })}
                        </ul>
                    )
                }}
            </Query>
        );
    }
}
