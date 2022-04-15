import React, {Component} from 'react';
import {Button, Card, Container} from "react-bootstrap";

class ProductItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showEditForm:false
        }
        this.addToCart = this.addToCart.bind(this);
        this.edit = this.edit.bind(this);
    }

    render() {
        return (
                <Card style={{width: '18rem'}} className={"m-1"}>
                    <Card.Body key={this.props.product.id}>
                        <Card.Title>{this.props.product.title}</Card.Title>
                        <Card.Text>{this.props.product.description}</Card.Text>
                        <Card.Text>{this.props.product.price} руб</Card.Text>
                        <Button variant="primary" onClick={this.addToCart}>Купить</Button>
                    </Card.Body>
                </Card>
        );
    }

    addToCart() {
        let cart = [];
        let position = {
            id: this.props.product.id,
            title: this.props.product.title,
            description: this.props.product.description,
            price: this.props.product.price,
            discount: this.props.product.discount,
            value: 1
        }

        if (localStorage.getItem('cart') !== null) {
            cart = JSON.parse(localStorage.getItem('cart'));
        }

        let flag = false;
        for (let i = 0; i < cart.length; i++) {
            if (cart[i].id === this.props.product.id) {
                cart[i].value += 1;
                flag = true;
            }
        }

        if (!flag) {
            cart.push(position)
        }

        localStorage.setItem('cart', JSON.stringify(cart));
    }

    edit() {
        this.setState({showEditForm: !this.state.showEditForm})
    }
}

export default ProductItem;