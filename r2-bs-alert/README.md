
# 使用 React、Redux 和 Bootstrap 实现 Alert

今天，我们来学习使用 React、Redux 和 Bootstrap 实现Alert。

## 例子

这个例子实现了弹出不同类型信息的功能，这些信息默认会在5秒后消失，你也可以手动点击使其消失。如果你在服务端有信息要提示，还可以通过 Redux 的单一数据源传到客户端在渲染页面时显示出来。

![](https://raw.githubusercontent.com/lewis617/react-redux-tutorial/master/r2-bs-alert/public/r2-bs-alert.gif)

源代码：

https://github.com/lewis617/react-redux-tutorial/tree/master/r2-bs-alert

安装：

```sh
npm i
```

开发环境下运行：

```sh
npm start
```

生产环境下构建：

```sh
npm run build
```

测试：

```sh
npm test
```

## 为何使用 Redux ？

React 有自己的局部状态（Local State），可以帮助我们在不同状态下渲染不同的界面。那么实现 Alert 为何要使用 Redux ？众所周知，Alert 通常都是要在程序中全局使用的：

 - 用户操作可能会发出 Alert。 
 - 网络请求等异步事件的处理器（Event Handler）可能会发出 Alert。
 - 甚至服务器渲染页面时，也可能会给客户端带来一个Alert（比如，你提交表单出错了，服务器重定向到表单页面，并显示错误提示）。

知道了 Alert 要全局使用，我们再来看 Redux。Redux 有一个全局单一的数据源，这个数据源可以通过 react-redux 连接到程序的任意一个组件。不但如此，更新这个数据源的 action，也可以全局使用：

 - 用户操作可以发起 action。
 -  网络请求等异步事件的处理器（Event Handler）可能会发起 action。
 - 甚至在服务器端也可以发起 action，然后将单一数据源传给客户端继续使用。

Redux 牛逼的设计让处理全局状态变得特别方便，实现 Universal 渲染（有些人喜欢叫SSR，但我觉得不准确）也变得非常容易。这与实现 Alert 的需求非常吻合，因此，本文通过 Redux 来辅助实现 Alert。
从另一个方面来说，一些不在全局使用的组件和功能，一般使用React的局部状态就可以了，切记不要什么功能都用 Redux 实现。

了解了为何要使用 Redux，我们就开始动工吧！

## 快速创建项目

搭建一个 React APP 的成本是很高的，你需要：

 - 使用 Webpack 打包。
 - 使用 Babel 编译。 
 - 搭建开发服务器。 
 - 使用 ESLint 进行语法检查。 
 - 使用 Mocha 或 Jest 进行测试。 
 - ……

很多人诟病这一点，不过这些东西都是重复性的体力活，社区早就造好了轮子，来提高生产力。本文就使用了 [create-react-app](https://github.com/facebookincubator/create-react-app) 来快速搭建项目。All you need is these command:

```sh
npm install -g create-react-app

create-react-app my-app
cd my-app/
npm start
```

然后上述所有东西就都有了！

>注意，要将 npm 设为淘宝源或你自己公司的私有 npm 源（只要快就行），否则速度会非常慢，甚至可能导致安装失败。

接下来，我们就开始编写代码。

## 设计编写 Redux

在一个 React 与 Redux 中的程序中，React 负责程序界面，而 Redux 负责程序功能。由于本例界面比较容易，所以我们先来设计 Redux。

我们期望的Alert 的功能包括：

 - 显示一条信息。 
 - 隐藏一条信息。 
 - 显示一条信息，过几秒自动隐藏。  
 - 如果服务器传来有信息，在页面渲染完，过几秒也自动隐藏。

功能明确了，让我们把它们写成函数：

 - alertShow  
 - alertHide  
 - alertMessage  
 - hideAllAlert

src/alert/redux.js

```js
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
```
尽管部分逻辑有点复杂，但都封装在 action 创建函数中了，多么清晰和模块化！接下来，我们编写 reducer 来根据这些 action，进行 state 的更新。
src/alert/redux.js

```js
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
```

这里使用了解构赋值和重写的语法来保证 state 的不可变（Immutable）。

>Redux 的 state 要求是不可变数据，这么做的原因是方便进行快速变更检查，进而有利于React组件判断是否需要重新渲染（re-render）。另外，不可变数据还有利于进行状态回退，错误追踪。不可变数据是函数式编程中一个常用的概念。关于不可变以及函数式编程在 React 与 Redux 中的应用，[《React与Redux开发实例精解》](https://item.jd.com/12010463.html)这本书中有非常详细的介绍，推荐阅读参考。

至此，Redux的编写就完成了。它的输出有四个：

 - reducer函数，用于创建store。  
 - alertHide 函数用于隐藏指定信息。  
 - alertMessage 函数用于显示一条信息，并在几秒后隐藏。  
 - hideAllAlert 函数用于在渲染完页面后，过几秒隐藏服务器传来的信息。

接下来，我们来编写 React 组件。

## 设计编写 React 组件

React 组件的功能包括三个：

 - 渲染要显示的信息，并根据类型渲染成不同颜色。  
 - 为每条信息渲染一个按钮，使用户可以通过点击按钮隐藏该信息。 
 - 在第一次渲染后，过几秒隐藏来自服务器的信息。

为此，我们做了以下几件事：

 - 首先，使用 react-redux 的 connect 将 Redux 的 state 和 action 创建函数传给组件。 
 - 然后在组件中遍历渲染出所有信息（使用了 react-bootstrap 提供的 Alert 组件）。 
 - 最后，将 alertHide 函数绑在按钮的点击事件上，将 hideAllAlert 函数绑在组件渲染后的生命周期钩子上。

组件功能就实现了！

```js
src/alert/AlertList.js

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Alert from 'react-bootstrap/lib/Alert';
import { hideAllAlert, alertHide } from './redux';

class AlertList extends Component {
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
)(AlertList);

```

为了让 connect 可以获取到 Redux 的 state 和 dispatch 方法，我们还需要在组件顶部提供store。

src/index.js

```js
// 三个参数分别为 reducer、initialState 和 enhancer
const store = createStore(
  combineReducers({ alerts: alertsReducer }),
  {},
  applyMiddleware(thunk)
);

// 在渲染之前发起action，用于模拟从服务器传来的信息
store.dispatch(alertMessage('message from server', 'info'));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```

为了使用 bootstrap，还需要安装 bootstrap，并引用它的样式文件。

```sh
npm i bootstrap@3 --save
```

src/index.js

```js
import 'bootstrap/dist/css/bootstrap.css';
```

至此，所有功能就都实现了！在后续的文章中，我们将介绍如何测试本例编写的 Redux 函数以及 React 组件。要知道，写测试是一个工程师走向成熟的必经之路，而且在 React 与 Redux 的应用中编写测试简直太方便了！

## 总结

 - Redux 适合实现全局性的组件和功能，一些局部使用的功能使用 React 的局部状态即可。  
 - 推荐使用 create-react-app 来快速搭建React应用。
 -  Redux 的 action 创建函数与要实现的功能一一对应。  
 - Redux 的 state 为不可变数据。
 - 使用 react-redux 的 connect 将 Redux 的 state 和 action 创建函数连接到组件，进而渲染界面，绑定事件。


## 教程源代码及目录

如果您觉得本博客教程帮到了您，就赏颗星吧！

[https://github.com/lewis617/react-redux-tutorial](https://github.com/lewis617/react-redux-tutorial)
