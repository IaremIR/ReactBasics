import React, { Component } from 'react';
import { Form, FormGroup, Col, FormControl, Button, ControlLabel } from 'react-bootstrap';
import { ApplicationContext } from '../Context/ApplicationContext'

export class LoginFormContainer extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      email: '',
      password: '',
      isLoggedin: false
    };
  }
 
  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({ isLoggedin: true });

    this.context.user.isAuthenticated = true;
    
    setTimeout(() => {
       this.props.history.push('/');
    }, 3000);
  }

  render() {
    return (
        <Form horizontal onSubmit={this.handleSubmit}>

          <FormGroup controlId="email">
            <Col componentClass={ControlLabel} sm={2}>
              Email
         </Col>
            <Col sm={10}>
              <FormControl autoFocus type="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} />
            </Col>
          </FormGroup>

          <FormGroup controlId="password">
            <Col componentClass={ControlLabel} sm={2}>
              Password
          </Col>
            <Col sm={10}>
              <FormControl type="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={2} sm={10}></Col>
          </FormGroup>
          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button type="submit" disabled={!this.validateForm()}>Login</Button>
            </Col>
          </FormGroup>
        </Form>
      )
  }
}

LoginFormContainer.contextType = ApplicationContext;