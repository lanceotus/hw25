import React from 'react';
import PropTypes from 'prop-types';
import CourseCard from "./CourseCard";
import './CourseList.css'

export default class CoursesList extends React.Component {
    render() {
        const cards = this.props.courses.map((course) => {return <CourseCard course={course}/>})
        return (
            <div className="courses">
                {cards}
            </div>
        );
    }
}

CoursesList.propTypes = {
    courses: PropTypes.array
}

CoursesList.defaultProps = {
    courses: []
}
