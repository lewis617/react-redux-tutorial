import React from 'react';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header className="header">
                <h1 className="title">React | Flux Dashboard</h1>
            </header>
        );
    }
}

Header.displayName = 'Header';
