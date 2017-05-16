- Create app with create-react-app:
	+ Installl create-react-app: `npm install -g create-react-app`
	+ New react app: `create-react-app hello-world`
	+ Eject code: `npm run eject`
  + Options:
    + Remove test file
    + Move all images to `src/assets`
    + Read more: https://github.com/facebookincubator/create-react-app
- Add .eslintrc for IDE
	```
    {
	  "extends": "react-app"
	}
	```
- Add Sass or Scss
	+ Use 2nd way (Install With: Webpack) in this post: https://medium.com/@Connorelsea/using-sass-with-create-react-app-7125d6913760
- Add Redux and more:
  + Install redux, react-redux, redux-thunk:
    + `npm install --save redux`
    + `npm install --save react-redux`
    + `npm install --save redux-thunk`
    + `npm install --save prop-types`
    + Read more: + https://github.com/reactjs/redux
                  + https://github.com/reactjs/react-redux
                  + https://github.com/gaearon/redux-thunk
  + Install redux-loger
    + `npm install --save redux-logger`
    + Read more: https://github.com/evgenyrodionov/redux-logger
  + Install redux-router
    + `npm install --save react-router`
    + `npm install --save react-router-dom`
    + Read more: https://github.com/ReactTraining/react-router

  * Config store.
    + create file `src/reducers/index.js`
      ```
      import {combineReducers} from 'redux'

      const rootReducer = combineReducers({})

      export default rootReducer
      ```
    + create file src/store/configureStore.js
      ```
      import {createStore, applyMiddleware} from 'redux'
      import thunkMiddleware from 'redux-thunk'
      import {createLogger} from 'redux-logger'
      import rootReducer from '../reducers'

      const loggerMiddleware = createLogger()

      const configureStore = (preloadedState) => {
        return createStore(
          rootReducer,
          preloadedState,
          applyMiddleware(
            thunkMiddleware,
            loggerMiddleware
          )
        )
      }

      export default configureStore
      ```

  * First Load redux, react-router to react
    + edit index.js
      ```
      import React from 'react'
      import ReactDOM from 'react-dom'
      import configureStore from './store/configureStore'
      import Root from './containers/Root'

      const store = configureStore()

      ReactDOM.render(
        <Root store={store}/>,
        document.getElementById('root')
      )
      ```

    + create file src/containers/Root.js
      ```
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

      const Root = ({store}) => (
        <Provider store={store}>
          <Router>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/login" component={Login}/>
            </Switch>
          </Router>
        </Provider>
      )

      Root.propTypes = {
        store: PropTypes.object.isRequired
      }

      export default Root
      ```
    + create file src/containers/Home.js
      ```
      import React, { Component } from 'react'
      import {Link} from 'react-router-dom'

      class Home extends Component {
        render() {
          return (
            <div className="home">
              <div className="home-header">
                <h1>Welcome to React</h1>
              </div>
              <Link to="/login">Login</Link>
            </div>
          );
        }
      }

      export default Home
      ```
    + create file src/containers/Login.js
      ```
      import React, { Component } from 'react'

      class Login extends Component {
        render() {
          return (
            <h1>Login page</h1>
          )
        }
      }

      export default Login
      ```

  * Build your first real react redux action:
    +  See code in this respo
    + Use api of ARM Server
