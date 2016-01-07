import Reflux from 'reflux'
import actions from '../actions/actions'
import _ from 'underscore'

export default Reflux.createStore({
  init(){
    this.objs = [];
    this.currId = 0;
    this.listenToMany(actions);
  },
  onAdd(obj){
    if(!obj.content){
      this.error = 'Cannot add empty string'
      this.trigger(this.error);
      return;
    }
    obj.id = this.currId++;
    this.objs.push(obj);
    // trigger an update
    this.trigger(null,this.objs)
  },
  onRemove(id){
    this.objs = _.without(
      this.objs,
      _.findWhere(
        this.objs,
        {id}
      )
    );
    this.trigger(null,this.objs);
  }
})
