import './App.css'
import React from "react"
import Header from './Components/Header';
import Updating from './Components/Update';
import Mounting from './Components/Mount';
import Unmounting from './Components/Unmount'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/mounting" component={Mounting} /> <Route path="/updating" component={Updating} />
            <Route path="/unmounting" component={Unmounting} />

          </Switch>

        </BrowserRouter>
      </div>
    );
  }
}
export default App;