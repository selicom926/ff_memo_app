import React from 'react';
import './Main.css';

export interface IMainProps {
    title?: string;
}

export default class Main extends React.Component<IMainProps> {

    componentDidMount() {
        
    }

    render() {
        return (
            <div className={'main_base'}>
                {this.props.children}
            </div>
        );
    }
}
