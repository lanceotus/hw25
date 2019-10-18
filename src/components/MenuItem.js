import React from 'react';
import {Link} from 'react-router-dom';

export default class MenuItem extends React.Component {
    render() {
        return (
            <div className="menu__item">
                <Link to={this.props.menu_link} className="menu__text">{this.props.text}</Link>
            </div>
        );
    }
}
