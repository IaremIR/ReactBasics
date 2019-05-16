import React, { Component } from 'react';
import { Button } from '../Shared/Button';

export class BrandsContainer extends Component {
    buttonClickHandler() {
 }
    style = {
        color: this.props.color
    }
    render() {
        console.log(this.props.color);
        return (
            <div>
                Brands
                <Button style={this.style} text='Brands' onClickHandler={this.buttonClickHandler} />
            </div>

        );
    }
}