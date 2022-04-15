import React, {Component} from 'react';
import {Button, Card, Container, Form, Row} from "react-bootstrap";
import {NavLink, Redirect} from "react-router-dom";
import {
    BACKEND_LOGIN_PATH,
    BACKEND_REGISTRATION_PATH, HOME_ROUTE,
    LOGIN_ROUTE,
    REGISTRATION_ROUTE
} from "../utils/consts";


class Auth extends Component {

    constructor(props) {
        super(props);
        this.state = {
            location: null,
            isLogin: false,
            email: null,
            password: null
        }

        this.authHandle = this.authHandle.bind(this);
        this.loginHandle = this.loginHandle.bind(this);
        this.passwordHandle = this.passwordHandle.bind(this);
    }

    componentDidMount() {
        let currentLocation = window.location.pathname;
        this.setState({location: currentLocation === LOGIN_ROUTE});
    }

    render() {
        return (
            <Container
                className={"d-flex justify-content-center align-items-center"}
                style={{height: window.innerHeight - 54}}
            >
                <Card style={{width:600}} className={"p-5"}>
                    <h2 className="m-auto">{this.state.location?"Авторизация":"Регистрация"}</h2>
                    <Form className="d-flex flex-column">
                        <Form.Control className={"mt-3"} placeholder={"Логин"} onChange={this.loginHandle}/>
                        <Form.Control className={"mt-3"} placeholder={"Пароль"} onChange={this.passwordHandle}/>
                        <Row>
                            {
                                this.state.location
                                ? <NavLink to={REGISTRATION_ROUTE} className={"d-flex align-items-center mt-3 pl-3 pr-3"}>Зарегистрироваться</NavLink>
                                : <NavLink to={LOGIN_ROUTE} className={"d-flex align-items-center mt-3 pl-3 pr-3"}>Войти</NavLink>
                            }
                            <Button className={"mt-3 align-self-end"} variant={"outline-success"} onClick={this.authHandle}>{this.state.location?"Войти":"Регистрация"}</Button>
                        </Row>
                    </Form>
                </Card>
            </Container>
        );
    }

    loginHandle(e) {
        this.setState({email: e.target.value})
    }

    passwordHandle(e) {
        this.setState({password: e.target.value})
    }

    authHandle() {
        let url = this.state.location ? BACKEND_LOGIN_PATH : BACKEND_REGISTRATION_PATH

        if (this.state.email == null || this.state.password == null) {

        }
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })
        })
            .then(res => {
                res.json().then(r => {
                    localStorage.setItem("userToken", r.message);
                    localStorage.setItem("isAuth", true.toString())
                })
                this.props.history.push("home")
            })
            .catch(error => {
                console.log(error)
            })
    }
}

export default Auth;
