import React, {Component} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import NavBar from "../components/NavBar";
import CartPosition from "../components/CartPosition";

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: [],
            total_products: 0,
            total_amount: 0
        }
    }

    componentDidMount() {
        let cart_products = JSON.parse(localStorage.getItem('cart'));
        let amount = 0;
        for (let i = 0; i < cart_products.length; i++) {
            amount += cart_products[i].price
        }

        this.setState({cart: cart_products});
        this.setState({total_amount: amount})
        this.setState({total_products: cart_products.length})
    }

    render() {
        console.log(this.state.cart)
        return (
            <Container>
                <NavBar/>
                <Row>
                    <Col md={3}>
                        <Row>
                            <Col md={8}>
                                <div className={"d-flex flex-column align-items-start"}>
                                    <span>Количество товаров</span>
                                    <span>Общая сумма</span>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className={"d-flex flex-column align-items-end"}>
                                    <span>{this.state.total_products}</span>
                                    <span>{this.state.total_amount}</span>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={9}>
                        {
                            this.state.cart.map(position => <CartPosition position={position}/>)
                        }
                    </Col>
                </Row>
                <Row>
                    <Button onClick={this.createOrder} style={{margin: 10}}>Заказать</Button>
                </Row>
            </Container>
        );
    }

    createOrder() {
        
    }
}

export default Cart;