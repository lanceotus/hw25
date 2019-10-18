import React from 'react';
import PropTypes from 'prop-types';
import Logo from "./Logo";
import MenuItem from "./MenuItem";
import './Header.css';

export default class Header extends React.Component {
    render() {
        const left_menu = this.props.menu.left.map((item) => {
            return <MenuItem menu_link={item.menu_item_link} text={item.menu_item_text}/>})
        const right_menu = this.props.menu.right.map((item) => {
            return <MenuItem menu_link={item.menu_item_link} text={item.menu_item_text}/>})

        return (
            <div className="header">
                <Logo logotext={this.props.logotext}/>
                <div className="menu__item_group">
                    {left_menu}
                </div>
                <div className="horizontal_spacer"/>
                <div className="menu__item_group">
                    {right_menu}
                </div>
            </div>
        );
    }
}

Header.propTypes = {
}

Header.defaultProps = {
    menu: {
        left: [],
        right: []
    }
}

