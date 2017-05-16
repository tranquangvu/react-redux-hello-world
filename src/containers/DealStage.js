import React, { Component } from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {logoutUser} from '../actions/session'
import '../stylesheets/dealstage.scss'

class DealStage extends Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    history: PropTypes.object.isRequired,
    logoutUser: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)
    this.logOut = this.logOut.bind(this)
  }

  componentWillMount() {
    if (!this.props.isAuthenticated) {
      this.props.history.replace('/login');
    }
  }

  logOut(e) {
    e.preventDefault()
    this.props.logoutUser()
    this.props.history.push('/')
  }

  render() {
    const {username} = this.props
    
    return (
      <div className='dealstage-container'>
        <h1 className='dealstage-title'>Hi {username}! Call Api to load deal stages list here!</h1>
        <a href='#' onClick={this.logOut}>Logout</a>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const {isAuthenticated, username} = state.session

  return {
    isAuthenticated,
    username
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({logoutUser}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(DealStage)
