import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import './CourseCard.css'

export default class CourseCard extends React.Component {
    render() {
        return (
            <Link to={this.props.course.course_link}>
                <div className="course_card">
                    <div className="course_card__name">{this.props.course.course_name}</div>
                    <div className="course_card__date_box">
                        Начало: <span className="course_card__date_text">{this.props.course.start_date}</span>.
                    </div>
                </div>
            </Link>
        );
    }
}

CourseCard.propTypes = {
    course_link: PropTypes.string,
    course_name: PropTypes.string,
    start_date: PropTypes.string
}

CourseCard.defaultProps = {
    course_name: '',
    course_link: '',
    start_date: ''
}