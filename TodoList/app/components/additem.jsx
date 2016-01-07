import React from 'react';
import ClassNames from 'classnames';

/**
 * '+' UIs 
 */
class AddItem extends React.Component {

  closePop() {
    this.props.hidePop();
  }

  preventCls(event) {
    event.stopPropagation();
  }

  addItem(e) {
    e.preventDefault();
    let name = React.findDOMNode(this.refs.name).value.trim(),
        desc = React.findDOMNode(this.refs.desc).value.trim();
    
    if (!name) {
      alert('task name cannot be empty');
      React.findDOMNode(this.refs.name).focus();
      return;
    }

    if (!desc) {
      alert('task description cannot be empty');
      React.findDOMNode(this.refs.desc).focus();
      return;
    }

    React.findDOMNode(this.refs.name).value = ''; 
    React.findDOMNode(this.refs.desc).value = '';

    this.props.addTask(name, desc);
    this.props.hidePop();
  }

  render() {
    let classes = ClassNames({
      'addpop': true,
      'show': this.props.needShow
    });

    return (
      <div className={classes} onClick={this.closePop.bind(this)}>
        <div className="add-input" onClick={this.preventCls.bind(this)}>
          <h3>Add Task</h3>
          <div className="form-group">
            <label>name</label>
            <input type="text" ref="name" />
          </div>
          <div className="form-group">
            <label>desc</label>
            <textarea ref="desc"></textarea>
          </div>
          <div className="form-group">
            <button onClick={this.addItem.bind(this)}>Submit</button>
          </div>          
          <span className="fa fa-close pop-cls" onClick={this.closePop.bind(this)}></span>
        </div>
      </div>
    );
  }
}

export default AddItem;