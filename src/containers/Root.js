import React from 'react'
import PropTypes from 'prop-types'
import {Provider} from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Home from './Home'
import Login from './Login'
import DealStage from './DealStage'

const Root = ({store}) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/login" component={Login}/>
        <Route path="/dealstage" component={DealStage}/>
      </Switch>
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root
