import React from 'react'
import Reflux from 'reflux'
import store from '../stores/store'
import actions from '../actions/actions'

export default class Todo extends React.Component{
  constructor(props) {
    super(props);
    this.state = {list: []};
  }

  onStatusChange (list) {
    this.setState({list: list});

  }
  componentDidMount() {
    store.listen(this.onStatusChange.bind(this));
    actions.getAll();

  }
  add(){
    var item =this.refs.item.value;
    this.refs.item.value='';
    actions.add(item);

  }
  remove(i){
    actions.remove(i);
  }
  render() {
    return (
        <div>
          <input type="text" ref="item"/>
          <button onClick={this.add.bind(this)}>add</button>
          <ul>
            {this.state.list.map( (item,i)=> {
              return <li key={i}>
                {item.name}
                <button onClick={this.remove.bind(this,i)}>remove</button>
              </li>
            })}
          </ul>
        </div>
    )
  }
}
