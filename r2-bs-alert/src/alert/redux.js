export const ALERT_SHOW = 'ALERT_SHOW';
export const ALERT_HIDE = 'ALERT_HIDE';

export function alertShow(messageText, messageType, key) {
  return {
    type: ALERT_SHOW,
    payload: {
      messageText, messageType, key
    }
  };
}

export function alertHide(key) {
  return {
    type: ALERT_HIDE,
    payload: { key }
  };
}

export function alertMessage(messageText, messageType, delay = 5000) {
  return (dispatch, getState) => {
    if (typeof messageText === 'string' && ['success', 'warning', 'danger', 'info'].indexOf(messageType) > -1) {
      const key = getState().alerts.lastKey + 1;
      dispatch(alertShow(messageText, messageType, key));
      setTimeout(() => dispatch(alertHide(key)), delay);
    } else {
      console.error('messageText must be string and messageType must be success, warning, danger, info');
    }
  };
}

export function hideAllAlert(delay = 5000) {
  return (dispatch, getState) => {
    getState().alerts.items.forEach((item) => {
      setTimeout(() => {
        dispatch(alertHide(item.key));
      }, delay);
    });
  };
}

export default function (state = { lastKey: -1, items: [] }, action) {
  switch (action.type) {
    case ALERT_SHOW:
      return {
        ...state,
        items: [...state.items, action.payload],
        lastKey: state.lastKey + 1
      };
    case ALERT_HIDE:
      return {
        ...state,
        items: state.items.filter(item => (item.key !== action.payload.key))
      };
    default:
      return state;
  }
}
