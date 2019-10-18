import React from 'react';
import './LoginForm.css';

class LoginFormContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: ''
        }
        this.loginClick = this.loginClick.bind(this)
        this.changeLogin = this.changeLogin.bind(this)
        this.changePassword = this.changePassword.bind(this)
    }

    loginClick(event) {
        if (this.state.login.length === 0)
            alert('Логин не задан!')
        else if (this.state.password.length === 0)
            alert('Пароль не задан!')
        else
            alert(`Попытка входа пользователя:\n\nЛогин: ${this.state.login}\n Пароль: ${this.state.password}`)
    }

    changeLogin(event) {
        this.setState({login: event.target.value})
    }

    changePassword(event) {
        this.setState({password: event.target.value})
    }

    render() {
        return (
            <div className='login__form'>
                <div className='login__title'>Войдите в свой аккаунт</div>
                <input className='login__input' placeholder='Логин *' onChange={this.changeLogin}/>
                <input className='login__input' placeholder='Пароль *' type='password' onChange={this.changePassword}/>
                <button className='login__button' onClick={this.loginClick}>Войти</button>
            </div>
        );
    }
}

export default class LoginForm extends React.Component {
    render() {
        return (
            <div className='login_form'>
                <LoginFormContent/>
            </div>
        );
    }
}
