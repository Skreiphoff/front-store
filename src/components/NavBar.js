import React, {Component} from 'react';
import {
    ADMIN_ROUTE,
    BACKEND_ME_PATH,
    CART_ROUTE,
    HOME_ROUTE,
    LOGIN_ROUTE,
    BACKEND_LOGOUT_PATH,
    REGISTRATION_ROUTE
} from "../utils/consts";

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: localStorage.getItem("userToken"),
            user: null
        }
        this.logoutHandle = this.logoutHandle.bind(this);
    }

    componentDidMount() {
        if (this.state.user == null && this.state.token !== null) {
            fetch(BACKEND_ME_PATH, {
                headers : {
                    "Authorization": this.state.token
                }
            })
                .then(res => res.json())
                .then(result => {
                    this.setState({user: result})
                    localStorage.setItem('user', JSON.stringify(result))
                })
        }
    }

    render() {
        return (
            <nav className={"nav"}>
                <a href={HOME_ROUTE}>Главная</a>
                <a href={CART_ROUTE}>Корзина</a>
                {
                    this.state.user == null ?
                        <div className={"auth"}>
                            <a href={LOGIN_ROUTE} >Войти</a>
                            <a href={REGISTRATION_ROUTE}>Зарегистрироваться</a>
                        </div>
                        :
                        <div className={"auth"}>
                            <a href={ADMIN_ROUTE} >{this.state.user.name} {this.state.user.surname}</a>
                            <span
                                style={{cursor: "pointer"}}
                                onClick={this.logoutHandle}>Выход</span>
                        </div>

                }

            </nav>
        );
    }

    logoutHandle() {
        if (this.state.user !== null && this.state.token !== null) {
            fetch(BACKEND_LOGOUT_PATH, {
                method: 'POST',
                headers : {
                    'Authorization' : this.state.token
                }
            })
                .then(res => res.json())
                .then(() => {
                    this.setState({token: null, user: null})
                    localStorage.removeItem("userToken")
                    localStorage.setItem("isAuth", false.toString())
                    this.props.history.push(HOME_ROUTE)
                })
        }
    }
}

export default NavBar;