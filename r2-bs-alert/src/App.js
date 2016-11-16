import React, { Component } from 'react';
import { AlertList } from './alert';
import { ButtonGroup, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { alertMessage } from './alert';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AlertList />
        <ButtonGroup>
          <Button
            onClick={() => this.props.dispatch(alertMessage('Success', 'success'))}
            bsStyle="success"
          >
            Success
          </Button>
          <Button
            onClick={() => this.props.dispatch(alertMessage('Danger', 'danger', 5500))}
            bsStyle="danger"
          >
            Danger
          </Button>
          <Button
            onClick={() => this.props.dispatch(alertMessage('Warning', 'warning'))}
            bsStyle="warning"
          >
            Warning
          </Button>
          <Button
            onClick={() => this.props.dispatch(alertMessage('Info', 'info'))}
            bsStyle="info"
          >
            Info
          </Button>
        </ButtonGroup>
      </div>
    );
  }
}

export default connect()(App);
