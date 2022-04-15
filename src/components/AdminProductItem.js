import React from 'react';
import {Button, Card} from "react-bootstrap";
import ProductItem from "./ProductItem";
import EditProduct from "./EditProduct";

class AdminProductItem extends ProductItem {
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
            <div className={"d-flex"}>
                <Card style={{width: '18rem'}} className={"m-1"}>
                    <Card.Body key={this.props.product.id}>
                        <Card.Title>{this.props.product.title}</Card.Title>
                        <Card.Text>{this.props.product.description}</Card.Text>
                        <Card.Text>{this.props.product.price} руб</Card.Text>
                        <Button variant="primary" onClick={this.edit}>Изменить</Button>
                    </Card.Body>
                </Card>
                {this.state.showEditForm && <EditProduct product={this.props.product}/>}
            </div>
        );
    }

    edit() {
        this.setState({showEditForm: !this.state.showEditForm})
    }
}

export default AdminProductItem;