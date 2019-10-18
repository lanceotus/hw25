import React from 'react';
import axios from 'axios';
import './ProfilePage.css';

export default class ProfilePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            email: ''
        }
        this.saveClick = this.saveClick.bind(this)
        this.changeFirstname = this.changeFirstname.bind(this)
        this.changeLastname = this.changeLastname.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
    }

    async saveClick(event) {
        try {
            const response = await axios.post('http://127.0.0.1:8000/educ_api/profile/',
                {'firstname': this.state.firstname, 'lastname': this.state.lastname, 'email': this.state.email},
                {mode: 'no-cors', headers: {'Authorization': 'token 7bc0c33fb7d659924ad9dae96056b61e8d057502'}});
            alert('Данные профиля успешно сохранены')
        }
        catch (err) {
            alert(err.toString())
        }
    }

    changeFirstname(event) {
        this.setState({firstname: event.target.value})
    }

    changeLastname(event) {
        this.setState({lastname: event.target.value})
    }

    changeEmail(event) {
        this.setState({email: event.target.value})
    }

    async loadData() {
        try {
            const response = await axios.get('http://127.0.0.1:8000/educ_api/profile/',
                {mode: 'no-cors', headers: {'Authorization': 'token 7bc0c33fb7d659924ad9dae96056b61e8d057502'}});

            const id = response.data[0].id;
            const name = response.data[0].name;
            const description = response.data[0].description;
            this.setState({firstname: id});
            this.setState({lastname: name});
            this.setState({email: description});
        }
        catch (err) {
            alert(err.toString())
        }
    }

    componentDidMount() {
        this.loadData()
    }

    render() {
        return (
            <div className="profile">
                <div className="profile__title">Персональные данные</div>
                <div className="profile__input_row_container">
                    <div className="profile__input_container">
                        <label>Имя</label>
                        <input id="firstname_field" className="profile__input"
                               value={this.state.firstname} onChange={this.changeFirstname}/>
                    </div>
                    <div className="profile__input_container">
                        <label>Фамилия</label>
                        <input id="lastname_field" className="profile__input"
                               value={this.state.lastname} onChange={this.changeLastname}/>
                    </div>
                </div>
                <div className="profile__input_row_container">
                    <div className="profile__input_container">
                        <label>e-mail</label>
                        <input id="email_field" className="profile__input"
                               value={this.state.email} onChange={this.changeEmail}/>
                    </div>
                </div>
                <div className="profile__button_row_container">
                    <button className={"profile__button"} onClick={this.saveClick}>Сохранить</button>
                </div>
            </div>
        );
    }
}
