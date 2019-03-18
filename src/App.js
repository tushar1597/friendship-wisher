import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router,Redirect} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import LandingPage from './containers/LandingPageContainer';
import Wall from './containers/WallContainer';
import LinkPage from './containers/LinkPageContainer';
import FinalDesign from './containers/FinalDesignContainer';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div>
      <Router>
      <Fragment>
{/*========================================================================================================
      <Route path='/' exact strict render={
        ()=>{
          return (
            <h1>Hello</h1>
          )
        }
      }/> */}
      <Route path="/design:userID" exact strict render={
      (props)=>{
        return(
          <FinalDesign userID={props.match.params.userID} />
        )}
    }/>
      <Route exact strict path='/' component={() => <LandingPage />} />
      <Route exact strict path='/wall' component={() => <Wall />} />
      <Route exact strict path='/link' component={() => <LinkPage />} />

{/*========================================================================================================*/}
      </Fragment>
      </Router>

      </div>
    );
  }
}

export default App;
