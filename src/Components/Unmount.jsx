import React from "react";

class Unmount extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
         
      }
  }
  
  render(){
  return (
    <div>
    <div >   
  <h1 style={{textAlign:'center',marginTop:'19px'}}> Unmounting</h1>
    </div>
      <div className="main">
        <p className="para">The next phase in the lifecycle is when a component is removed from the DOM, or unmounting as React likes to call it.<br/>
        React has only one built-in method that gets called when a component is unmounted:<br></br>
        </p>
        1. <span style={{color:'red'}}>componentWillUnmount</span><br></br>
        <span style={{color:'green',fontWeight:'900'}}>componentWillUnmount :-</span>
        The componentWillUnmount method is called when the component is about to be removed from the DOM.
      </div>
      <img className="imgg" src="https://miro.medium.com/max/1089/1*nleLui-x8YNJhZaEwwLioQ.png" alt="img"/>
      </div>
  );
}
}
export default Unmount;