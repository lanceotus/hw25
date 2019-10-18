import React from 'react';
import './RegisterForm.css';

class RegisterFormContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: '',
            password2: '',
            email: ''
        }
        this.registerClick = this.registerClick.bind(this)
        this.changeLogin = this.changeLogin.bind(this)
        this.changePassword = this.changePassword.bind(this)
        this.changePassword2 = this.changePassword2.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
    }

    registerClick(event) {
        if (this.state.login.length === 0)
            alert('Логин не задан!')
        else if (this.state.password.length === 0)
            alert('Пароль не задан!')
        else if (this.state.password !== this.state.password2)
            alert('Пароли не совпадают!')
        else
            alert(`Будет зарегистрирован пользователь:\n\nЛогин: ${this.state.login}\n` +
                `Пароль: ${this.state.password}\n e-mail: ${this.state.email}`)
    }

    changeLogin(event) {
        this.setState({login: event.target.value})
    }

    changePassword(event) {
        this.setState({password: event.target.value})
    }

    changePassword2(event) {
        this.setState({password2: event.target.value})
    }

    changeEmail(event) {
        this.setState({email: event.target.value})
    }

    render() {
        return (
            <div className='register__form'>
                <div className='register__title'>Зарегистрируйте свой аккаунт</div>
                <input className='register__input' placeholder='Логин *' onChange={this.changeLogin}/>
                <input className='register__input' placeholder='Пароль *' type='password' onChange={this.changePassword}/>
                <input className='register__input' placeholder='Повторите пароль *' type='password' onChange={this.changePassword2}/>
                <input className='register__input' placeholder='e-mail' onChange={this.changeEmail}/>
                <button className='register__button' onClick={this.registerClick}>Зарегистрироваться</button>
            </div>
        );
    }
}

export default class RegisterForm extends React.Component {
    render() {
        return (
            <div className='register_form'>
                <RegisterFormContent/>
            </div>
        );
    }
}
