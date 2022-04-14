import React, {Component} from 'react';
import {BACKEND_PATH} from "../utils/consts";
import {Button, Card} from "react-bootstrap";

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }



    render() {
        return (
            this.state.products.map(item => (
                <Card style={{ width: '18rem' }}>
                    <Card.Body key={item.id}>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>{item.description}</Card.Text>
                        <Button variant="primary">Купить</Button>
                    </Card.Body>
                </Card>
                ))
        );
    }
}

export default Products;