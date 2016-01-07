import React from 'react';

/**
 * show single task
 */
class Task extends React.Component {
  constructor(props) {
    super(props);
    this.taskId = parseInt(props.params.id, 10);
    this.state = {task: null};
  }

  finishTask(e) {
    e.preventDefault();

    let thought = React.findDOMNode(this.refs.thought).value.trim();
    if (!thought) {
      alert('You need input your thought!');
      React.findDOMNode(this.refs.thought).focus();
      return;
    }
    this.props.finishTask(this.taskId, thought);
  }

  render() {
    let task = null;
    this.props.tasks.forEach(function(val) {
      if (val.id === this.taskId) {
        task = val;
      }
    }.bind(this));
    if (!task) {
      return (
        <div className="wrap">
          <h2>This task is not found.</h2>
        </div>        
      );
    }

    if (task.state === 0) { /*uncompleted task*/
      return (
        <div className="wrap single-task">
          <div className="task-header">
            <h3>{task.name}</h3>
            <p>{task.created}</p>
          </div>
          <div className="task-desc">
            {task.desc}
          </div>
          <div className="task-state">
            <p>State: <i className="fa fa-clock-o unfinished"></i></p>
          </div>
          <div className="task-over">
            <label>Thought:</label>
            <textarea ref="thought"></textarea>
            <button onClick={this.finishTask.bind(this)}>DONE</button>
          </div>
        </div>
      );      
    } else {
      return (
        <div className="wrap single-task">
          <div className="task-header">
            <h3>{task.name}</h3>
            <p>{task.created}</p>
          </div>
          <div className="task-desc">
            {task.desc}
          </div>
          <div className="task-state">
            <p>State: <i className="fa fa-check-square-o finished"></i></p>
            <p>Finished: {task.finished}</p>
            <p>Thought: {task.thought}</p>
          </div>
        </div>
      );
    }

  }
}

export default Task;