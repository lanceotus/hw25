import React from 'react';
import {Route} from 'react-router-dom';
import './MainDiv.css';
import ProfilePage from "./ProfilePage";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
import CoursesList from "./CoursesList";
import Schedule from "./Schedule";

export default class MainDiv extends React.Component {
    render() {
        return (
            <div className="main">
                <Route exact path='/' render={() => <h1>Добро пожаловать!</h1>}/>
                <Route exact path='/courses' render={(props) => <CoursesList courses={this.props.courses}/>}/>
                <Route exact path='/schedule' render={(props) => <Schedule lessons={this.props.lessons}/>}/>
                <Route exact path='/profile' component={ProfilePage}/>
                <Route exact path='/register' component={RegisterForm}/>
                <Route exact path='/login' component={LoginForm}/>
            </div>
        );
    }
}
