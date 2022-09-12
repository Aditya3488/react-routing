import React from "react";
class Update extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
         
      }
  }
  
  render(){
  return (
    <div>
    <div >   
  <h1 style={{textAlign:'center',marginTop:'19px'}}>Updating</h1>
    </div>
      <div className="main">
           <p className="para">The next phase in the lifecycle is when component is updated</p>
        <p className="para">A component is updated whenever there is change in the component's state or props</p>
        React has five built-in methods that gets called, in this order, when a component is updated:-<br></br>
        1.<span style={{color:'red'}}>getDerivedStateFromProps()</span><br></br>
        2.<span style={{color:'red'}}>shouldComponentUpdate()</span><br></br>
        3.<span style={{color:'red'}}>render()</span><br></br>
        4.<span style={{color:'red'}}>getSnapshotBeforeUpdate()</span><br></br>
        5.<span style={{color:'red'}}>componentDidUpdate()</span><br></br><br></br>
        1.<span style={{color:'green',fontWeight:'900'}}>getDerivedStateFromProps:-</span>this is the first method that is called when a component gets updated.
        This is still the natural place to set the state object based on the initial props.<br></br><br></br>

2.<span style={{color:'green',fontWeight:'900'}}>shouldComponentUpdate:-</span>
        In the shouldComponentUpdate() method you can return a Boolean value that specifies whether React should continue with the rendering or not.

The default value is true.<br></br><br></br>
        3.<span style={{color:'green',fontWeight:'900'}}>render:-</span>The render() method is of course called when a component gets updated, it has to re-render the HTML to the DOM, with the new changes.<br></br><br></br>
        4.<span style={{color:'green',fontWeight:'900'}}>getSnapshotBeforeUpdate:-</span>
        In the getSnapshotBeforeUpdate() method you have access to the props and state before the update, meaning that even after the update, you can check what the values were before the update.<br></br>
        If the getSnapshotBeforeUpdate() method is present, you should also include the componentDidUpdate() method, otherwise you will get an error.<br></br><br></br>
        5.<span style={{color:'green',fontWeight:'900'}}>componentDidUpdate:-</span>
        The componentDidUpdate method is called after the component is updated in the DOM.
<img className="img1" src="https://miro.medium.com/max/1400/0*_UWbSFyhbBMVeCkj.jpeg"/>

      </div>
      </div>
      
  );
}
}
export default Update;