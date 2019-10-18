import React from 'react';
import PropTypes from 'prop-types';
import './Schedule.css';

class ScheduleTable extends React.Component {
    render() {
        const table_body = this.props.lessons.map((lesson) => {
            return <tr className="schedule__tr">
                <td className="schedule__td">{lesson.course_name}</td>
                <td className="schedule__td">{lesson.lesson_name}</td>
                <td className="schedule__td">{lesson.lesson_time}</td>
            </tr>
        })
        return (
            <table className="schedule__table">
                <tr>
                    <th className="schedule__th">Название курса</th>
                    <th className="schedule__th">Название занятия</th>
                    <th className="schedule__th">Начало занятия</th>
                </tr>
                {table_body}
            </table>
        )
    }
}

ScheduleTable.propTypes = {
    schedule: PropTypes.array
}

ScheduleTable.defaultProps = {
    schedule: []
}

export default class Schedule extends React.Component {
    render() {
        return (
            <div className="schedule">
                <div className="schedule__title">Расписание занятий</div>
                <ScheduleTable lessons={this.props.lessons}/>
            </div>
        )
    }
}