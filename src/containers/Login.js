import React, { Component } from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {
  Form,
  Icon,
  Input,
  Button,
  Alert
} from 'antd'
import {Link} from 'react-router-dom'
import {loginUser} from '../actions/session'
import '../stylesheets/login.scss'

const FormItem = Form.Item

class Login extends Component {
  static propTypes = {
    form: PropTypes.object.isRequired,
    loginUser: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string
  }

  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.goToDealStagePage = this.goToDealStagePage.bind(this)
  }

  componentWillMount() {
    if (this.props.isAuthenticated) {
      this.goToDealStagePage()
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isAuthenticated) {
      this.goToDealStagePage()
    }
  }

  goToDealStagePage() {
    this.props.history.push('/dealstage')
  }

  handleSubmit(e) {
    e.preventDefault();

    const {form, loginUser} = this.props
    form.validateFields((err, credentials) => {
      if (!err) {
        loginUser(credentials)
      }
    })
  }

  render() {
    const {errorMessage, form} = this.props
    const {getFieldDecorator} = form

    return (
      <div className='login-container'>
        <div className='header'>
          <h1 className='title'>Welcome to my app :)</h1>
        </div>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <h2 className='form-title'>Login to Your Account</h2>
          {errorMessage && <Alert message={errorMessage} type="error"/>}
          <FormItem
            label='Your Email'
            colon={false}
          >
            {getFieldDecorator('email', {})(
              <Input
                placeholder="Email"
                prefix={<Icon type="mail"/>}/>
            )}
          </FormItem>
          <FormItem
            label='Password'
            colon={false}
            extra={<a href="#">I think i forgot my password</a>}
          >
            {getFieldDecorator('password', {})(
              <Input
                type="password"
                placeholder="Password"
                prefix={<Icon type="safety"/>}/>
            )}
          </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit" className="form-submit-btn">
              Log in
            </Button>
          </FormItem>
          <FormItem>
            Don’t have any account? &nbsp;
            <Link to='/home'>Sign Up</Link>
          </FormItem>
        </Form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const {isAuthenticated, errorMessage} = state.session

  return {
    isAuthenticated,
    errorMessage
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loginUser
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(Login))
