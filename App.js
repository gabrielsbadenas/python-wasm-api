import logo from './logo.svg';
import React from 'react'
import './App.css';
class MyComponent extends React.Component{
constructor(){
	this.state={checking:false}
	this.renderProfile=this.renderProfile.bind(this)
}
renderProfile(){
return(
<div>Functino called</div>)
}
render(){
return(
<div className='patient-container'>
	
	</div>
)
}
}
function App() {
let langs = ['Ruby','es6','scala']
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
	  {langs.map(it=><p>{it}</p>)}
	  </div>
	  <div>1</div><div>2</div>
	  <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
   </div>
  );
}
function A(){

}
class Fake {
constructor(){
this.state={foo:'yyy'}}
clicker=()=>{
this.state.foo='xxx'}
	render(){
	return (
<div onClick={this.clicker}>{this.state.foo}</div>
	)
	}
}
export default App;
