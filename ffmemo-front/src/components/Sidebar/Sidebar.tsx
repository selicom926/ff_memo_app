import React from 'react';
import './Sidebar.css';
import CategoryList from 'components/CategoryList/CategoryList';

export interface ISidebarProps {
    title?: string;
}

export default class Sidebar extends React.Component<ISidebarProps> {

    componentDidMount() {
        
    }

    render() {
        return (
            <div className={'base'}>
                <header>
                    <h1 className={'base_title'}>
                        {this.props.title}
                    </h1>
                </header>
                <main>
                    <CategoryList></CategoryList>
                </main>
            </div>
        );
    }
}
