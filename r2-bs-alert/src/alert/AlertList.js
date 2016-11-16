import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Alert from 'react-bootstrap/lib/Alert';
import { hideAllAlert, alertHide } from './redux';

class CustomAlert extends Component {
  static propTypes = {
    alerts: PropTypes.array.isRequired,
    hideAllAlert: PropTypes.func.isRequired,
    alertHide: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.hideAllAlert();
  }

  render() {
    const { alerts, alertHide } = this.props;
    return (
      <div>
        {alerts.map((item, i) => (
          <Alert
            key={i}
            bsStyle={item.messageType}
            onDismiss={() => alertHide(item.key)}
          >
            {item.messageText}
          </Alert>
        ))}
      </div>
    );
  }
}

export default connect(
  state => ({
    alerts: state.alerts.items
  }),
  { hideAllAlert, alertHide }
)(CustomAlert);
