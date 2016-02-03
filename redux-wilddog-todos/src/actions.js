import Wilddog from 'wilddog/lib/wilddog-node'
/*
 * action 类型
 */
export const GET_TODO_ERROR = 'GET_TODO_ERROR';
export const GET_TODO_OK = 'GET_TODO_OK';
export const ADD_TODO_ERROR = 'ADD_TODO_ERROR';
export const ADD_TODO_OK = 'ADD_TODO_OK';
export const REMOVE_TODO_OK = 'REMOVE_TODO_OK';
export const REMOVE_TODO_ERROR = 'REMOVE_TODO_ERROR';

let wilddog=new Wilddog('https://redux-wilddog-todos.wilddogio.com')

/*
 * action 创建函数
 */
export function getTodo() {
  return (dispatch,getState)=>{

    wilddog.child('todos').once('value',(snapshot)=>{
      let obj=snapshot.val();
      let array=[];
      for(let key in obj){
        array.push({key:key,text:obj[key].text})
      }
      dispatch({
        type: GET_TODO_OK,
        payload: array
      })
    },(err)=>{
      dispatch({
        type: GET_TODO_ERROR,
        payload: err
      })
    });


  }
}

export function addTodo(text) {
  return (dispatch,getState)=>{

    wilddog.child('todos').push({
      text
    },(err)=>{
      if(err){dispatch({type:ADD_TODO_ERROR,payload:err})}
    });



  }
}

export function removeTodo(key) {
  return (dispatch,getState)=>{

    wilddog.child(`todos/${key}`).remove((err)=>{
      if(err)dispatch({type:REMOVE_TODO_ERROR,payload:err})
    });


  }
}


export function registerListeners() {
  return (dispatch, getState) => {

    wilddog.child('todos').on('child_removed', snapshot => {
      dispatch({
        type: REMOVE_TODO_OK,
        payload: snapshot.key()
      })
    });

    wilddog.child('todos').on('child_added', snapshot => dispatch({
      type: ADD_TODO_OK,
      payload: Object.assign({},snapshot.val(),{key:snapshot.key()})
    }));


  };
}
