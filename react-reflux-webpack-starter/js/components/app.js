import React from 'react'

export default class App extends React.Component{
  render(){
    return(
      <div>
        <h1 className="title">Hi world</h1>
        <p>If you see this, you're ready to get started with React + Reflux + Webpack :)</p>
        <p>Have you read the <a href="https://github.com/codeocelot/react-reflux-webpack-starter/">Read me</a> yet?</p>
        {this.props.children}
      </div>
    )
  }
}
