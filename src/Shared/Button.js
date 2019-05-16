import React, { Component } from 'react';

export class Button extends Component{
    render() {
        
        return (
            <div>
                <button type='button' style={this.props.style} onClick={this.props.onClickHandler}>{this.props.text} </button>
            </div>
        )
    };
}