import React from 'react';
import Header from './header';
import AppContainer from './app-container';
import Counters from './counters';
import Footer from './footer';


export default class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <AppContainer>
                    <Counters />
                </AppContainer>
                <Footer />
            </div>
        );
    }
}

App.displayName = 'App';
