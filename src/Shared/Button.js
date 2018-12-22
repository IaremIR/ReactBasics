import React, { Component } from 'react';

export class Button extends Component{
    render() {
        const style = {
            color: this.props.color
        }
        return (
            <div>
                <button type='button' style={style}>{this.props.text}</button>
            </div>
        )
    };
}