import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (

      <div className="header" >
        <h1 id="Head" >Component Life Cycle</h1>
        <div className="link" >
          <Link className="link1"  to="/mounting" >Mounting</Link>
          <Link className="link1"  to="/updating">Updating</Link>

          <Link className="link1" to="/unmounting">Unmounting</Link>
        </div>

      </div>
    );
  }
}
export default Header;