import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel, Button, Checkbox, Col, HelpBlock } from 'react-bootstrap';
// import './../StyleForms.css';

export class SignupContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isValid: false,
            isLoading: false,
            fullName: '',
            email: '',
            password: '',
            confirmPassword: ''
        };
    }



    validateEmail() {
        const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (emailRex.test(this.state.email)) {
            return 'success'
        } else {
            return 'error'
        }
    }

    handleChange = event => {
        this.setState({ [event.target.id]: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();
    //     this.setState({ isLoading: true });
    // ;

        setTimeout(() => {
            this.setState({ isLoading: false });
            this.props.history.push('/');
        }, 2000);
    }

    render() {
        const isLoading = this.state.isLoading;
        const {fullName,password,confirmPassword} = this.state;
        const isEnabled = 
        fullName.length<15 && password.length>4 && confirmPassword === password && this.validateEmail() === 'success';
        


        return isLoading ? (
            <div>
                <img src='https://i.gifer.com/1amw.gif' alt='spin' />
            </div>) :

            <form className='signup' onSubmit={this.handleSubmit} >
                <FormGroup
                    controlId="fullName"
                    validationState={this.state.fullName.length < 15 ? 'success' : 'error'}>
                    <Col sm={7}>
                        <ControlLabel >Full name</ControlLabel>
                        <FormControl 
                            type="text"
                            placeholder="Full name"
                            value={this.state.fullName}
                            onChange={this.handleChange}
                        />
                        <HelpBlock> Must be less than 15 signs </HelpBlock>
                    </Col>
                </FormGroup >
                <FormGroup
                    controlId="email"
                    validationState={this.validateEmail() ? 'success' : 'error'}>
                    <Col sm={7}>
                        <ControlLabel>Email</ControlLabel>
                        <FormControl type="email" placeholder='Email'
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                        <HelpBlock> Email is required </HelpBlock>
                    </Col>
                </FormGroup>
                <FormGroup controlId="password"
                    validationState={this.state.password.length > 4 ? 'success':'error'}>
                    <Col sm={7}>
                        <ControlLabel>Password</ControlLabel>
                        <FormControl type="password" placeholder='Password'
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                        <HelpBlock> Password length is min 5 signs </HelpBlock>
                    </Col>
                </FormGroup>
                <FormGroup controlId="confirmPassword"
                    validationState={this.state.password === this.state.confirmPassword ? 'success' : 'error'}>
                    <Col sm={7}>
                        <ControlLabel>Confirm Password</ControlLabel>
                        <FormControl type="password" placeholder='Confirm Password'
                            value={this.state.confirmPassword}
                            onChange={this.handleChange}
                        />
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col sm={10}>
                        <Checkbox>Remember me</Checkbox>
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col smOffset={0} sm={10}>
                        <Button
                           disabled = {!isEnabled}
                            bsStyle='primary'
                            type="submit"
                            text="Signup">
                             Sign up
                        </Button>
                    </Col>
                </FormGroup>
            </form>
    }
}
