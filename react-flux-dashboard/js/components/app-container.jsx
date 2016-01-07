import React from 'react';

export default class AppContainer extends React.Component {
    render() {
        return (
            <div className="app-container">
                {this.props.children}
            </div>
        );
    }
}

AppContainer.displayName = 'AppContainer';

AppContainer.propTypes = {
    children: React.PropTypes.element.isRequired
};
