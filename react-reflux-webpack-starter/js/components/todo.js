import Reflux from 'reflux'
import actions from '../actions/actions'
import store from '../stores/store'
import React from 'react'
import classNames from 'classnames'

export default class RefluxApp extends React.Component{
  constructor(props){
    super(props);
    this.state = {items:[]}
  }
  componentDidMount(){
    store.listen(
      (err,items) =>{
        if(err){
          this.setState({error:err})
        }
        else this.setState({items})
      }
    )
  }
  /*
    The following methods use 'this'.  As of React .14, components no longer
    autobind this to methods. If you prefer to use older function declaration syntax,
    then ensure you bind `this` to each method that uses it.
  */
  checkValidInput = (evt) => {
    if(evt.target.value){
      this.setState({error:null})
    }
  };
  handleAdd = () => {
    var content = this.refs.userInput.value;
    actions.add({content})
    this.refs.userInput.value = ''
  };
  handleRemove = (id) => {
    actions.remove(id)
  };
  render(){
    var items = this.state.items.map((item)=>{return(
      <li key={item.id}>
        {item.content}
        <button type="button" className="btn-rm" onClick={this.handleRemove.bind(this,item.id)} > Remove </button>
      </li>
    )})
    return(
      <section>
        <h2>Some Reflux Actions</h2>
        <label htmlFor="input">Enter some text to add to store</label>
        <input type="text" ref="userInput" name="input" onChange={this.checkValidInput} className="user-input"></input>
        <button type="button" onClick={this.handleAdd}>Submit</button>
        <span className={classNames({'error':!!this.state.error},'error-display')}>{this.state.error}</span>
        <ul>
          {items}
        </ul>
      </section>
    )
  }
}
