import React from "react";

export default class Mount extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <div  >
          <h1 style={{ textAlign: 'center', marginTop: '19px' }}>Mounting</h1>
        </div>
        <div className="main">
          <p className="para">Mounting means putting elements into the DOM.</p>
          <p>React has four built-in methods that gets called, in this order, when mounting a component:<br></br>
            1.<span style={{ color: 'red' }}>constructor()</span><br></br>
            2.<span style={{ color: 'red' }}>getDerivedStateFromProps</span><br></br>
            3.<span style={{ color: 'red' }}>render()</span><br></br>
            4.<span style={{ color: 'red' }}>componentDidMount()</span>
          </p>
          1.<span style={{ color: 'green', fontWeight: '900' }}>constructor()</span>:-The<span style={{ color: 'red' }}> constructor()</span> method is called before anything else, when the component is initiated, and it is the natural place to set up the<span style={{ color: 'red' }}> initial state</span> and other <span style={{ color: 'red' }}>initial values</span>

          The constructor() method is called with the props, as arguments, and you should always start by calling the super(props) before anything else, this will initiate the parent's constructor method and allows the component to inherit methods from its parent.<br></br><br></br>
          2.<span style={{ color: 'green', fontWeight: '900' }}>getDerivedStateFromProps</span>:-The getDerivedStateFromProps() method is called right before rendering the element(s) in the DOM.
          it takes state as an argument and ,returns an object with changes to the state.This is the natural place to set the state object based on intial props


          <br></br><br></br>
          3.<span style={{ color: 'green', fontWeight: '900' }}>render()</span>:-The render method is required and is method that actually outputs the HTML to the Dom<br></br><br></br>
          4.<span style={{ color: 'green', fontWeight: '900' }}>componentDidMount</span>:-the componentDidMount method is called after the component is rendered.
        </div>
        </div>
        );
    }
}