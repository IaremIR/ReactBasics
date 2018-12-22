import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Avatar extends Component {
    render() {
        return (
            <img className="avatar"
                src={this.props.url}
                alt={this.props.img}
            />
        );
    }
};

Avatar.propTypes = {
    url: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired
};