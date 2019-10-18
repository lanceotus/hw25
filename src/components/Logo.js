import React from 'react';

export default class Logo extends React.Component {
    render() {
        return (
            <div className="logo">
                {this.props.logotext}
            </div>
        );
    }
}
